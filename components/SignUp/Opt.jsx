import React, { useState } from 'react';
import { TextInput, View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import auth from "@react-native-firebase/auth";

export const Opt = () => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [change, setChange] = useState(false)
    const [optCode, setOptCode] = useState();
    const [confirm, setConfirm] = useState();
    const enterNumber = async() => {
        // const confirmation = await auth().signInWithPhoneNumber(`+976${phoneNumber}`)
        // setConfirm(confirmmation);
    }
    const checkOpt = () => {}
  return (
    <View style={styles.container}>
        <View style={{ width: '100%', flexDirection: 'column', paddingHorizontal: 13 }}>
            <Text style={styles.title}>{!change ? `Enter your phone number` : `Check OTP code`}</Text>
            <TextInput 
                style={styles.input}
                onChangeText={text => !change ? setPhoneNumber(text) : setOptCode(text)}
                value={phoneNumber}
                placeholder={!change ? "enter your number ..." : "enter your opt"}
            /> 
            <View style={styles.btn_section}>
                <TouchableOpacity
                    style={styles.btn}
                >
                    <Text style={styles.btn_text}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginBottom: 14,
        fontSize: 18
    },
    input: {
        borderWidth: 0.8,
        borderColor: 'silver',
        padding: 10,
        width: '100%',
        borderRadius: 4,
    },
    btn_section: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        paddingHorizontal: 50,
        paddingVertical: 10,
        backgroundColor: "#1DA1F2",
        borderRadius: 4,
    },
    btn_text: {
        color: '#FFF',
        fontSize: 16
    }
})
