import React from 'react'
import { View, Image, StyleSheet } from "react-native";

export const Start = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Group.png")} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center',
    },
    logo: {
      width: 214,
      height: 164,
    }
})