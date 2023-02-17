import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export const Empty = (props) => {
  const { empty_or_not } = props;
  return (
    <View style={styles.empty_container}>
        <View style={styles.empty_content}>
            <View style={styles.image_section}>
                <Image source={{ uri: empty_or_not ? 'https://cdn-icons-png.flaticon.com/512/2889/2889676.png' : 'https://cdn-icons-png.flaticon.com/512/118/118096.png' }} style={styles.empty_icon} />
            </View>
            <Text style={styles.empty_text}>{ empty_or_not ? `You need to log in` : `You don't have ordered any products` }</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    empty_container: {
        flex: 1,
        paddingTop: 130,
    },
    empty_content: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    empty_icon: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    empty_text: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    }, 
    image_section: {
        width: 200,
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',    
        borderWidth: 0.8,
        borderRadius: 100,
        marginBottom: 20
    }
})