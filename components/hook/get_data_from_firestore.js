import React, { useEffect, useState } from 'react'
import firestore from "@react-native-firebase/firestore";

export const useGet_data_from_firestore = (path) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async() => {
            try {
                await firestore().collection(path).get().then(async(doc) => {
                    setData(doc.docs.map(el => el.data()))
                })
            } catch (error) {
                console.log("Error of getUserDocument: ", error);
            }
        })()
        setLoading(false);
    }, [path])
    return { data, loading };
}
