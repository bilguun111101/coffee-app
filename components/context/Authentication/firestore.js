import { createContext, useContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { useGet_data_from_firestore } from "../../hook/get_data_from_firestore";
import { useAuth } from "./authentication";
import { useGet_data_second_collection } from "../../hook/get_data_second_collection";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const products = useGet_data_from_firestore("products") || false;
    const [current_user_data, setCurrent_user_data] = useState(false);
    const { userUid } = useAuth();

    const myBag = useGet_data_second_collection("myBag", userUid);
    const order = useGet_data_second_collection("order", userUid);

    const setDocumentMyBag = async(path, myBag) => {
        await firestore().collection('admin').doc(userUid).collection(path).add(myBag);
    }
    
    const getUserData = async(path, doc) => {
        return await firestore().collection(path).doc(doc).get();
    }

    const deleteMyBag = async(path, id) => {
        firestore().collection('admin').doc(userUid).collection(path).doc(id).delete().then(() => console.log("bag product delete is successful!!!"));
    }

    useEffect(() => {
        if(userUid) setCurrent_user_data(getUserData("myBag", userUid))
    }, [userUid])

    return (
        <UserDataContext.Provider
            value={{
                products, 
                getUserData,
                current_user_data,
                setDocumentMyBag,
                myBag,
                deleteMyBag,
                order
            }}
        >
            { children }
        </UserDataContext.Provider>
    )
}

export const useUserData = () => useContext(UserDataContext);