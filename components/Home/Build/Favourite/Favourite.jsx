import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, View, StyleSheet, Image, Pressable, Alert } from 'react-native';
import { useAuth, useDetailData } from '../../../context';

export const Favourite = ({ data }) => {
  return (
    <FlatList 
        horizontal 
        data={data} 
        renderItem={({ item }) => <ImageSection data={item} />} 
        keyExtractor={item => item.image} 
        showsHorizontalScrollIndicator={false} 
    />
  )
}

export const ImageSection = ({ data }) => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const { image, price, name } = data;
    const { setDetailData } = useDetailData();
    const click_product = () => {
        setDetailData(data);
        navigation.navigate("Detail", { data });
    }
    return (
        <Pressable style={styles.image_section} onPress={ () => user ? click_product() : alert("You have to Log in") }>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={{ marginTop: 10, flexDirection: 'column' }}>
                <Text style={styles.name}>{ name }</Text>
                <Text style={styles.price}>{`$${price} / spruce`}</Text>
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
        borderRadius: 23,
    },
    name: {
        fontSize: 16,
        fontWeight: '500'
    },
    price: {
        fontSize: 12,
        marginTop: 3,
        color: "#2D2A2B",
    }
})