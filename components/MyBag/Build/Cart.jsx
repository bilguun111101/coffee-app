import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore";
import { useAuth } from '../../context';

export const Cart = (props) => {
    const { addiction, total, name, size, image, id } = props.data;
    const { userUid } = useAuth();
    const navigation = useNavigation();
    const deleteBagElement = async() => {
        await firestore().collection('admin').doc(userUid).collection("myBag").doc(id).delete();
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.close_btn} onPress={() => deleteBagElement()}>
            <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.image_section}>
            <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.document}>
            <Text style={styles.name}>{ name }</Text>
            <Text>{`$${total} / ${size}`}</Text>
            <View style={{ marginTop: 20, }}>
                { addiction?.map((el, idx) => {
                    if (el === "") return;
                    return (
                        <Text style={{ marginBottom: 5 }} key={idx}>{ `+ ${el}` }</Text>
                    )
                }) }
            </View>
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
        borderBottomWidth: 0.8,
        borderBottomColor: 'silver',
        marginBottom: 20,
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
        paddingRight: 16,
        zIndex: 10,
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
