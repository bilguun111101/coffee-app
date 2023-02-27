import React from 'react'
import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export const Card = (props) => {
    const navigation = useNavigation();
    const { date, process, quantity, total } = props.element;
    const openDetail = () => {
        // navigate.navigate("Detail");
    }
    const color = process === "Processing" ? "#2F80ED" : process === "Success" ? "#2AA952" : "#F01F0E";
  return (
    <Pressable style={styles.container} onPress={openDetail}>
        <View style={styles.section}>
            <View>
                <Text style={{ fontSize: 16 }}>{`Order #${props.number}`}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 11, color: 'silver' }}>Quantity: </Text>
                    <Text style={{ fontSize: 11 }}>{quantity}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.detail_section}>
                <Text>Details</Text>
            </TouchableOpacity>
        </View>
        <View style={{...styles.section, alignItems: 'flex-end'}}>
            <Text style={{ fontSize: 16, color: 'grey' }}>{date}</Text>
            <Text>{`Total Amount: $${total}`}</Text>
            <View style={{ padding: 10 }}>
                <Text style={{ color }}>{process}</Text>
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
