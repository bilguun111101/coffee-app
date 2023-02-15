import React from 'react'
import { Button, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export const Card = () => {
    const navigation = useNavigation();
    const openDetail = () => {
        // navigate.navigate("Detail");
    }
  return (
    <Pressable style={styles.container} onPress={openDetail}>
        <View style={styles.section}>
            <View>
                <Text style={{ fontSize: 16 }}>Order #13</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 11, color: 'silver' }}>Quantity: </Text>
                    <Text style={{ fontSize: 11 }}>1</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.detail_section}>
                <Text>Details</Text>
            </TouchableOpacity>
        </View>
        <View style={{...styles.section, alignItems: 'flex-end'}}>
            <Text style={{ fontSize: 16, color: 'grey' }}>05-20-2020</Text>
            <Text>Total Amount: $10.56</Text>
            <View style={{ padding: 10 }}>
                <Text style={{ color: "#2F80ED" }}>Processing</Text>
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 5,
        borderWidth: 0.7,
        borderColor: 'silver',
        backgroundColor: "#FFF",
        paddingHorizontal: 16,
        paddingVertical: 13,
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    section: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    detail_section: {
        width: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10
    }
})
