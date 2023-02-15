import React from 'react'
import { Feather } from '@expo/vector-icons';
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.content}>
        <View style={styles.image_container}>
        </View>
        <TouchableOpacity style={styles.button_container}>
          <Feather name="log-out" size={28} color="black" />
          <Text style={{ marginLeft: 5, fontSize: 20 }}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
      height: 50,
      width: '100%',
      backgroundColor: '#FFF',
      paddingVertical: 70,
      borderBottomWidth: 0.5,
      borderColor: 'silver',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: '#FFF',
      paddingTop: 50,
    },
    image_container: {
      width: 100,
      height: 100,
      borderWidth: 0.7,
      borderRadius: 70,
      overflow: 'hidden'
    },
    button_container: {
      width: '80%',
      margin: 40,
      borderWidth: 0.7,
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
    }
})
