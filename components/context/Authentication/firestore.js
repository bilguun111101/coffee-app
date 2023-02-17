import { createContext, useContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { useGet_data_from_firestore } from "../../hook/get_data_from_firestore";
import { useAuth } from "./authentication";

const UserDataContext = createContext();

// const userDocumentData = {
//     name: String,
//     myBag: {
//         product_id: String,
//         total: Number,
//         product_name: String,
//         types: String[],
//         size: String,
//         date: String,
//         quantity: Number,
//         orderNumber: Number,
//         id: String,
//     }[],
//     orders: {
//         id: String,
//         total: Number,
//         product_name: String,
//         types: String[],
//         size: String,
//         date: String,
//         quantity: Number,
//         orderNumber: Number,
//     }[],
//     phone: String,
//     email: String,
// }

export const UserDataProvider = ({ children }) => {
    const products = useGet_data_from_firestore("products") || false;
    const [current_user_data, setCurrent_user_data] = useState(false);
    const { userUid } = useAuth();

    const setDocumentMyBag = async(path, myBag) => {
        await firestore().collection('admin').doc(userUid).collection(path).add(myBag);
    }
    
    const getUserData = async(path, doc) => {
        return await firestore().collection(path).doc(doc).get();
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
                setDocumentMyBag
            }}
        >
            { children }
        </UserDataContext.Provider>
    )
}

export const useUserData = () => useContext(UserDataContext);