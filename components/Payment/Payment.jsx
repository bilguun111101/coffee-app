import React from 'react';
import { View, StyleSheet, Text } from "react-native";

export const Payment = () => {
  return (
    <View style={styles.container}>
        <Text>Payment Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
