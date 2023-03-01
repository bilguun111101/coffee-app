import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";


export const useGet_data_second_collection = (secondPath, uuid) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async() => {
            try {
                firestore().collection('admin').doc(uuid).collection(secondPath).onSnapshot(docs => {
                    // let save = [];
                    // docs.forEach(doc => {
                        // save.push({ id: doc.id, ...doc.data() });
                    // })
                    setData(docs.docs.map((el, idx) => ({ id: el.id, ...el.data() })));
                })
            } catch (error) { console.log(error) }
        })()
    }, [uuid], []);
    return data;
}