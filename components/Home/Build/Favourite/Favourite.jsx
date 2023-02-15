import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, View, StyleSheet, Image, Pressable } from 'react-native';

export const Favourite = ({ data }) => {
  return (
    <FlatList horizontal data={data} renderItem={({ item }) => <ImageSection data={item} />} keyExtractor={item => item.id} />
  )
}

export const ImageSection = ({ data }) => {
    const { image, cost, name, type } = data;
    const navigation = useNavigation();
    return (
        <Pressable style={styles.image_section} onPress={ () => navigation.navigate("Detail") }>
            <Image source={require("../../../../assets/testImage.png")} style={styles.image} />
            <View style={{ marginTop: 10, flexDirection: 'column' }}>
                <Text style={styles.name}>Hot Chocolate</Text>
                <Text style={styles.price}>$3.12 / spruce</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 8,
    },
    image_section: {
        width: 160,
        flexDirection: 'column',
        gap: 7,
        marginTop: 13,
        marginRight: 12
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 5,
    },
    name: {
        fontSize: 16,
    },
    price: {
        fontSize: 12,
        marginTop: 3,
        color: "#2D2A2B",
    }
})