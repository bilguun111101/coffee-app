import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, SafeAreaView, Text, TextInput } from 'react-native';
import { useAuth } from '../context';

export const LogInWithPhone = () => {
    const { phoneNumber, setPhoneNumber, signInWithPhoneNumber } = useAuth();
    const navigation = useNavigation();
    const phone_number_input = (number) => {
        if (number.length > 8) {
            signInWithPhoneNumber();
            navigation.navigate("Otp");
            return;
        };
        setPhoneNumber(number);
    }
    useEffect(() => {
        console.log(phone)
    }, [phone])
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require("../../assets/phone.png")} style={styles.icon} />
        <View style={styles.title_section}>
            <Text style={styles.title}>Enter your mobile number</Text>
        </View>
        <Text style={styles.text}>We will send confirmation code</Text>
        <View style={styles.number_section}>
            <Text style={styles.number_of_country}>+976</Text>
            <TextInput 
                style={styles.input}
                onChangeText={phone_number_input}
                value={phoneNumber}
                keyboardType="phone-pad"
            />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    icon: {
        width: 20,
        height: 30,
        marginBottom: 20,
    },
    title_section: {
        width: 193,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '500',
        fontFamily: 'Helvetica Neue',
        marginBottom: 15,
    },
    text: {
        color: 'grey',
    },
    number_section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    number_of_country: {
        color: 'grey',
        fontSize: 26,
        fontWeight: '400',
        marginRight: 10,
    },
    input: {
        width: 158,
        fontSize: 26,
        borderRadius: 4,
        borderWidth: 0.5,
        fontWeight: '400',
        paddingVertical: 7,
        borderColor: 'grey',
        paddingHorizontal: 14,
    },
})
