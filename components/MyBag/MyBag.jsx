import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import { Cart } from './Build/Cart';

export const MyBag = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{`Order items (2)`}</Text>
      </View>
      <ScrollView style={styles.order}>
        <Cart />
      </ScrollView>
      <View style={styles.bottom_document}>
        <View style={styles.bottom_document_content}>
          <View style={styles.row}></View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFF',
    },
    header: {
      width: '100%',
      padding: 16,
    },
    title: {
      fontWeight: '500',
      fontSize: 16,
    },
    order: {
      width: '100%',
    },
    bottom_document: {
      padding: 16,
      flex: 1,
    },
    bottom_document_content: {
      flex: 1,
      paddingTop: 16,
    },
    row: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
})
