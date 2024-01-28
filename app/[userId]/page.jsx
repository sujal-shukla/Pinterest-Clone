"use client"
import { collection, getDocs,getDoc,doc, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import app from '../firebaseconfig'
import UserInfo from "./../Components/UserInfo"
import  PinList from "./../Components/Pins/PinList";



const profile = ({ params }) => {
    const db = getFirestore(app)
    const [userInfo, setUserInfo] = useState()
    const [listOfPins, setListOfPins] = useState([])
    useEffect(() => {
        console.log(params.userId.replace("%40", "@"));
        if (params) {
            getUserInfo(params.userId.replace("%40", "@"))
        }
    }, [params])




    useEffect(()=>{
        if(userInfo)
        {
          getUserPins();
        }
    },[userInfo])


    const getUserPins = async () => {
        const q=query(collection(db,'pinterest-post')
        ,where("email",'==',userInfo.email));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setListOfPins(listOfPins => [...listOfPins,doc.data()])
        });
    }


    const getUserInfo = async (email) => {
        const docRef = doc(db, "user", email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setUserInfo(docSnap.data())
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    return (
        <div>
            {userInfo?
            <UserInfo userInfo = {userInfo} /> : null }
            <PinList listOfPins= {listOfPins} />
        </div>
    )
}

export default profile