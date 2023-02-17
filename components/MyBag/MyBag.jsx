import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import { useAuth } from '../context';
import { Cart } from './Build/Cart';
import { Empty } from "../Empty";

export const MyBag = () => {
  const { user } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      {
        user ? (
          <>
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
          </>
        ) : (
          <Empty empty_or_not={user ? true : false} />
        )
      }
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
