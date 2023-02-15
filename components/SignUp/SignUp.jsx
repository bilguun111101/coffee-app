import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from "react-native";

export const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const signUp = () => {}
  return (
    <View style={styles.container}>
        <View>
            <TextInput  
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="email..."
                keyboardType="email-address"
            />
            <View style={styles.small}>
                <TextInput  
                    style={styles.small_input}
                    onChangeText={text => setFirstName(text)}
                    value={firstName}
                    placeholder="First name..."
                />
                <TextInput  
                    style={styles.small_input}
                    onChangeText={text => setLastName(text)}
                    value={lastName}
                    placeholder="Last name..."
                />
            </View>
            <TextInput 
                style={styles.input}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="password ..."
            />
            <View style={styles.btn_section}>
                <TouchableOpacity
                    onPress={() => signUp()}
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
    small: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12,
        height: 40,
        justifyContent: 'space-between'
        // borderWidth: 0.8,
    },
    input: {
        margin: 12,
        height: 40,
        borderWidth: 0.8,
        padding: 10,
        borderColor: 'silver',
    },
    small_input: {
        padding: 10,
        borderWidth: 0.8,
        borderColor: 'silver',
        width: '49%',
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
