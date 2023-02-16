import { createContext, useContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';

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
    const [products, setProducts] = useState();

    // const getUserDocument = async(doc, collection) => {
    //     try {
    //         let userDocument;
    //         if (doc) {
    //             userDocument = await firestore().collection(collection).doc(doc).get();
    //             return userDocument;
    //         }
    //         userDocument = await firestore().collection(collection).get();
    //         return userDocument;
    //     } catch (error) {
    //         console.log("Error of getUserDocument: ", error);
    //     }
    // }

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

    useEffect(() => {
        const getUserDocument = async(doc, collection) => {
            try {
                let userDocument;
                if (doc) {
                    userDocument = await firestore().collection(collection).doc(doc).get();
                    return userDocument;
                }
                userDocument = await firestore().collection(collection).get();
                return userDocument;
            } catch (error) {
                console.log("Error of getUserDocument: ", error);
            }
        }
        setProducts(getUserDocument(false, 'products'));
    }, [])

    return (
        <UserDataContext.Provider
            value={{
                setUserDocument,
                updateDocumentMyBag,
                products, 
                setProducts,
            }}
        >
            { children }
        </UserDataContext.Provider>
    )
}

export const useUserData = () => useContext(UserDataContext);