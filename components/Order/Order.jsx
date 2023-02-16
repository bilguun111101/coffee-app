import React from 'react';
import { Card } from './Build';
import btns from "./type-button.json";
import DropShadow from "react-native-drop-shadow";
import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";

export const Order = () => {
  return (
    <View style={styles.container_content}>
      <View style={styles.container}>
        <DropShadow style={styles.header}>
          <View style={styles.header_content}>
            <Text style={{ color: '#000', fontSize: 20, fontWeight: '600' }}>My Orders</Text>
          </View>
          <View style={styles.header_btns}>
            { btns.map((el, idx) => {
              return(
                <View style={styles.btn_content} key={idx}>
                  <Pressable><Text style={{ fontSize: 17 }}>{ el }</Text></Pressable>
                </View>
              )
            }) }
          </View>
        </DropShadow>
        <ScrollView style={styles.content}>
          <Card />
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container_content: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingTop: 30,
    backgroundColor: '#FFF',
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    zIndex: 100
  },
  header_content: {
    padding: 25,
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },
  header_btns: {
    width: '100%',
    flexDirection: 'row',
  },
  btn_content: {
    width: "33.3333%",
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 25,
  },
  jesus: {
    flex: 1,
    backgroundColor: '#000'
  }
})
