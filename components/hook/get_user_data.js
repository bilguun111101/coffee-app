import React, { useEffect, useState } from 'react'
import firestore from "@react-native-firebase/firestore";

export const useGet_user_data_firestore = (path, doc) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async() => {
            try {
                await firestore().collection(path).doc(doc).get().then((doc) => {
                    setData(doc.docs.map(el => el.data()))
                })
            } catch (error) {
                console.log("Error of getUserDocument: ", error);
            }
        })()
    }, [])
    return data;
}
