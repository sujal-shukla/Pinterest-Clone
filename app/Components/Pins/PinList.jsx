import app from '@/app/firebaseconfig'
import { getFirestore } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";

const PinList = ({ userInfo }) => {
    const db = getFirestore(app)

    useEffect(() => {
        getUserPins()
    },[])


    const getUserPins = async () => {
        const q = query(collection(db, "pinterest-post"), where("email", "==", userInfo.email));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }
    return (
        <div>PinList</div>
    )
}

export default PinList