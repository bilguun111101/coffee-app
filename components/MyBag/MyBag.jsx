import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import { useAuth, useUserData } from '../context';
import { Cart } from './Build';
import { Empty } from "../Empty";

export const MyBag = () => {
  const { user } = useAuth();
  const { myBag } = useUserData();
  // const total = myBag?.reduce((accumilator, currenValue) => accumilator + currenValue.price);
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
                  {/* <Text style={{ color: 'gray' }}>{ `${total + 10}$` }</Text> */}
                </View>
                <View style={styles.subtotal}>
                  <Text style={{ color: 'gray' }}>Tax & Fees</Text>
                  <Text style={{ color: 'gray' }}>{ `${10}$` }</Text>
                </View>
                <View style={styles.subtotal}>
                  <Text style={{ fontSize: 18, fontWeight: '500' }}>Total</Text>
                  {/* <Text style={{ fontSize: 16, fontWeight: '500' }}>{total}</Text> */}
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
    }
})
