import { createContext, useContext, useState } from "react";

const UserActiveContext = createContext();


export const UserActiveProvider = ({ children }) => {
    const [otpScreen, setOtpScreen] = useState(false);
    const [userActive, setUserActive] = useState(false);
    const [productsDataCame, setProductsDataCame] = useState(false);
    return (
        <UserActiveContext.Provider value={{ userActive, setUserActive, otpScreen, setOtpScreen, productsDataCame, setProductsDataCame }}>
            { children }
        </UserActiveContext.Provider>
    )
}

export const useUserActive = () => useContext(UserActiveContext);