import { useAuth, useUserData } from '../context';
import React, { useState, useEffect, lazy } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import { Cart } from './Build/Cart';
import { Empty } from "../Empty";
import { useNavigation } from '@react-navigation/native';

export const MyBag = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const { myBag, deleteMyBag, setDocumentMyBag } = useUserData();
  
  const AddOrder = async() => {
    myBag.forEach((doc) => {
      setDocumentMyBag("order", doc);
      deleteMyBag("myBag", doc.id);
      navigation.navigate("Bottom_tab_container");
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      {
        user ? (
          myBag ?
            (<>
              <View style={styles.header}>
                  <Text style={styles.title}>{`Order items ${myBag.length}`}</Text>
              </View>
              <ScrollView style={styles.order}>
                { myBag?.map((el, idx) => <Cart data={el} key={idx} />) }
              </ScrollView>
              <View style={styles.bottom_document}>
                <View style={styles.subtotal}>
                  <Text style={{ color: 'gray' }}>Subtotal</Text>
                </View>
                <View style={styles.subtotal}>
                  <Text style={{ color: 'gray' }}>Tax & Fees</Text>
                  <Text style={{ color: 'gray' }}>{ `${10}$` }</Text>
                </View>
                <View style={styles.subtotal}>
                  <Text style={{ fontSize: 18, fontWeight: '500' }}>Total</Text>
                  <Text style={{ fontSize: 16, fontWeight: '500' }}>{
                    (() => {
                      let total = 0;
                      myBag?.forEach(element => {
                        total += element.total;
                      });
                      return `${total + 10}$`;
                    })()
                  }</Text>
                </View>
                <View style={styles.addOrder}>
                  <Pressable onPress={() => {AddOrder()}} style={styles.addOrder_btn}>
                    <Text style={{ textAlign: 'center', color: '#FFF' }}>Add Order</Text>
                  </Pressable>
                </View>
              </View>
            </>)
            :
            <Empty empty_or_not={false} />
        ) : (
          <Empty empty_or_not={true} />
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
    subtotal: {
      width: '100%',
      flexDirection: 'row',
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 0.8,
      borderBottomColor: 'silver'
    },
    addOrder: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    addOrder_btn: {
      width: '80%',
      padding: 10,
      backgroundColor: 'orange',
      borderRadius: 10,
    }
})
