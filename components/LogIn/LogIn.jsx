import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Pressable } from "react-native";
import { useUserActive } from '../context';

export const LogIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { setUserActive } = useUserActive();
    const navigation = useNavigation();
    const LogIn = () => {
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            alert('it is not email!!!');
            return;
        }
        setUserActive(true);
    }
  return (
    <View style={styles.container}>
        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'column' }}>
            <TextInput 
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                defaultValue={email}
                keyboardType="email-address"
                placeholder='email ...'
            />
            <TextInput 
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                defaultValue={password}
                keyboardType="password"
                placeholder='password ...'
            />
        </View>
        <View style={styles.btn_section}>
            <TouchableOpacity
                style={styles.btn} 
                onPress={ () => LogIn() }
            >
                <Text style={styles.btn_text}>Log in</Text>
            </TouchableOpacity>
        </View>
        <Pressable style={styles.go_to_signUp} onPress={ () => navigation.navigate("SignUp") }>
            <Text style={styles.signUp_btn}>Don't have an account? </Text>
            <Text style={styles.signUp_real_btn}>Sign up</Text>
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        margin: 12,
        height: 40,
        borderWidth: 0.8,
        padding: 10,
        borderColor: 'silver',
        borderRadius: 4,
        width: '90%',
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
    },
    go_to_signUp: {
        width: '90%',
        margin: 12,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    signUp_btn: {
        textDecorationLine: 1
    },
    signUp_real_btn: {
        color: '#1DA1F2',
        fontWeight: '500'
    }
})
