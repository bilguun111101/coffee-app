import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";


export const useGet_data_second_collection = (secondPath, uuid) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async() => {
            try {
                await firestore().collection('admin').doc(uuid).collection(secondPath).get().then(doc => {
                    setData(doc.docs.map(el => ({ ...el.data(), id: el.id })))
                })
            } catch (error) { console.log(error) }
        })()
    }, [])
    return data;
}