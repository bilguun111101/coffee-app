import React from 'react'
import { useDetail, useDetailData } from '../../context';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

export const Amount = ({ data, booleans, setBooleans, index }) => {
    const { setOrder, order, setTotal } = useDetail();
    const { detailData } = useDetailData();
    const { img, text, cost } = data;
    const Click = () => { 
        setBooleans(old => old.map((el, idx) => index === idx ? !el : el = false))
        setTotal(+detailData.price + +cost);
        setOrder({ ...order, size: text })
    }
    return (
        <Pressable onPress={() => { Click() }} style={styles.container} >
            <View style={!booleans[index] ? { padding: 10 } : styles.active}>
                <Image source={{ uri: img }} style={styles.size_cup} />
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
    },
    size_cup: {
        width: 48,
        height: 48
    }
})
