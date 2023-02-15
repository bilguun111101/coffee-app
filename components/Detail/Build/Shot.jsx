import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useDetail } from '../../context';

export const Shot = () => {
    const { setOrder, order } = useDetail();
    const [active, setActive] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const minus = () => {
        if (quantity < 2) return;
        setQuantity(quantity - 1);
    }
    const add = () => setQuantity(quantity + 1);
    useEffect(() => {
        setOrder({ ...order, quantity })
    }, [quantity], [])
  return (
    <Pressable style={styles.container} onPress={() => setActive(!active)}>
        <Text style={{ ...styles.title, color: active ? "#969495" : '#D3A762' }}>Shot</Text>
        <View style={{ ...styles.choose, borderColor: active ? "#969495" : '#D3A762' }}>
            <Text style={styles.check}>{`${quantity} shots`}</Text>
            <View style={styles.button_section}>
                <Pressable onPress={add}>
                    <Text style={styles.operation}>+</Text>
                </Pressable>
                <Text style={styles.digit}>{quantity}</Text>
                <Pressable onPress={minus}>
                    <Text style={styles.operation}>-</Text>
                </Pressable>
            </View>
        </View>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
    choose: {
        height: 48,
        padding: 15,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
    },
    button_section: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    digit: {
        fontSize: 17,
        marginHorizontal: 13,
    },
    operation: {
        width: 30,
        fontSize: 16,
        color: '#D3A762',
        textAlign: 'center',
    },
    check: {
        fontSize: 16,
    },
    title: {
        fontSize: 12,
        marginBottom: 10,
        fontWeight: '400',
    }
})
