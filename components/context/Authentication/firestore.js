import { createContext, useContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { useGet_data_from_firestore } from "../../hook/get_data_from_firestore";

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
    const products = false || useGet_data_from_firestore("products");

    const setUserDocument = async({ doc, name, myBag, orders, phone, email }) => {
        firestore().collection('users').doc(doc).set({
            name,
            myBag,
            orders,
            phone, 
            email,  
        })
    }

    const updateDocumentMyBag = async({ doc, myBag }) => {
        firestore().collection('users').doc(doc).update({
            myBag,
        })
    }

    return (
        <UserDataContext.Provider
            value={{
                setUserDocument,
                updateDocumentMyBag,
                products, 
                // setProducts,
            }}
        >
            { children }
        </UserDataContext.Provider>
    )
}

export const useUserData = () => useContext(UserDataContext);