import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useDetail } from '../../context';

export const Amount = ({ text, booleans, setBooleans, index }) => {
    const { setOrder, order } = useDetail();
    const Click = () => { 
        setBooleans(old => old.map((el, idx) => index === idx ? !el : el = false))
        setOrder({ ...order, size: text })
    }
    return (
        <Pressable onPress={() => { Click() }} style={styles.container} >
            <View style={!booleans[index] ? { padding: 10 } : styles.active}>
                <FontAwesome5 name="coffee" size={24} color="black" />
            </View>
            <Text style={{ ...styles.text, color: booleans[index] ? "black" : 'silver' }}>{text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        gap: 7,
        width: '20%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
        color: 'silver',
    },
    icon: {
        padding: 10,
    },
    active: {
        padding: 10,
        borderWidth: 3,
        borderRadius: 50,
        borderColor: '#F39C12',
        backgroundColor: '#FAD7A0',
    }
})
