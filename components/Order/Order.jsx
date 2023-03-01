import React from 'react';
import { Empty } from '../Empty';
import { useAuth } from '../context';
import { TabViewSection } from '../TabView';
import { StyleSheet, SafeAreaView } from "react-native";

export const Order = () => {
  const { user } = useAuth();
  return (
    <SafeAreaView style={styles.container_content}>
      {
        user ? (
          <>
            <TabViewSection />
          </>
        ) : (
          <Empty empty_or_not={user ? true : false} />
        )
      }
    </SafeAreaView>
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
