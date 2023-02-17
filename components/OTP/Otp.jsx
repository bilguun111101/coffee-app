import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View, SafeAreaView, Text, TextInput, Pressable } from 'react-native';
import { useAuth } from '../context';
import firestore from "@react-native-firebase/firestore";

export const Otp = () => {
    const { confirmCode, setConfirmationCode, confirmationCode, phoneNumber } = useAuth()
    const navigation = useNavigation();
    const check_opt = (number) => {
        setConfirmationCode(number);
    }
    const sendCode = async() => {
        try {
            const isConfirmed = await confirmCode();
            if (!isConfirmed?.additionalUserInfo?.isNewUser) {
                console.log(
                    "is new",
                    isConfirmed?.additionalUserInfo?.phoneNumber
                    );
                    await firestore()
                    .collection("users")
                    .doc(isConfirmed?.user?.uid)
                    .set({
                        phoneNumber: isConfirmed?.user?.phoneNumber,
                        myBag: [],
                        orders: [],
                    });
                }
                navigation.navigate("Bottom_tab_container");
                return;
            } catch (error) {
                console.log(error);
            }
    }
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require("../../assets/phone.png")} style={styles.icon} />
        <View style={styles.title_section}>
            <Text style={styles.title}>Enter your mobile number</Text>
        </View>
        <Text style={styles.text}>{`We will send confirmation code +976${phoneNumber}`}</Text>
        <View style={styles.number_section}>
            <TextInput 
                style={styles.input}
                onChangeText={text => text.length < 7 && check_opt(text)}
                value={confirmationCode}
                keyboardType="phone-pad"
            />
        </View>
        <Pressable onPress={sendCode} style={styles.sendCode}>
            <Text style={{ color: "#FFF" }}>Send code</Text>
        </Pressable>
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
    sendCode: {
        marginTop: 60,
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: '#D3A762',
        borderRadius: 5
    }
})