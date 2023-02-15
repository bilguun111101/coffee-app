import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export const Cart = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.close_btn}>
            <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.image_section}>
            <Image source={require("../../../assets/testImage.png")} style={styles.image} />
        </View>
        <View style={styles.document}>
            <Text style={styles.name}>Hot Chocolate</Text>
            <Text>{`$3.12 / spruce`}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    image_section: {
        width: '30%',
        overflow: 'hidden',
        borderRadius: 5,
    },
    document: {
        width: '65%',
        position: 'relative',
        marginLeft: '5%',
    },
    close_btn: {
        position: 'absolute',
        top: 0,
        right: 0,
        paddingRight: 16
    },
    image: {
        width: '100%',
        height: 120,
    },
    name: {
        fontSize: 20,
        marginBottom: 6,
    }
})
