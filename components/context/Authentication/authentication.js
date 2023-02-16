import { createContext, useContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
// import { auth, firestore } from "./app";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      if (user) setUser(user);
      if (loading) setLoading(false);
    });
    return subscriber; // unsubscribe on unmount
  }, []);


  useEffect(() => {
    console.log(phoneNumber);
  }, [phoneNumber]);


  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        `+976${phoneNumber}`
      );
      setConfirm(confirmation);
    } catch (error) {
      console.log(error);
    }
  };


  const confirmCode = async () => {
    try {
      return await confirm.confirm(confirmationCode);
    } catch (error) {
      console.log("Invalid code.");
    }
  };


  const logOut = async () => {
    await auth().signOut();
  };

  
  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithPhoneNumber,
        confirmCode,
        logOut,
        setConfirmationCode,
        setPhoneNumber,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);