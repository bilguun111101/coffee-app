import { createContext, useContext } from "react";
import firestore from "@react-native-firebase/firestore";

const collection = 'admin-order';

const InsertContext = createContext();

export const InsertProvider = ({ children }) => {
    const InsertData = (data) => firestore().collection(collection).doc().set(data);
    const UpdateData = ({ doc, order }) => firestore().collection(collection).doc(doc).update(order);
    return (
        <InsertContext.Provider
            value={{
                InsertData,
                UpdateData,
            }}
        >
            { children }
        </InsertContext.Provider>
    )
}

export const useInsert = () => useContext(InsertContext);