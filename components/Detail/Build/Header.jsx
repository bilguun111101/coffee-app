import React from 'react';
import { BlurView } from 'expo-blur';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { useDetailData } from '../../context';

export const Header = () => {
  const navigation = useNavigation();
  const { detailData, setDetailData } = useDetailData();
  return (
    <View style={styles.header}>
        <View style={styles.header_btns}>
          <Pressable style={styles.header_btn_container} onPress={ () => {
            setDetailData({  });
            navigation.navigate("Home")
          }}>
            <BlurView
                style={styles.header_btn}
                tint="light"
                intensity={20}
                >
            <AntDesign name="left" size={20} color="white" />
            </BlurView>
          </Pressable>
          <Pressable style={styles.header_btn_container} onPress={() => {
            setDetailData({  });
            navigation.navigate("MyBag")
          }}>
            <BlurView
                style={styles.header_btn}
                tint="light"
                intensity={20}
                >
              <SimpleLineIcons name="bag" size={20} color="white" />
            </BlurView>
          </Pressable>
        </View>
        <Image source={{ uri: detailData.image }} style={styles.header_image} />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
      width: '100%',
      height: 374,
      position: 'relative',
    },
    header_btns: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 70,
      zIndex: 100,
      paddingHorizontal: 20,
    },
    header_image: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      right: 0, top: 0, left: 0, bottom: 0,
    },
    header_btn: {
      width: 40,
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
    header_btn_container: {
      width: 40,
      height: 40,
      borderRadius: 50,
      overflow: 'hidden'
    },
    content: {
      flex: 1,
      padding: 16,
      flexDirection: 'column',
      gap: 10,
    },
    title_section: {
      width: '100%',
      borderBottomWidth: 0.6,
      borderColor: "#D3A762",
      paddingVertical: 16
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
    },
    coffee_amount: {
      width: '100%',
      paddingVertical: 16,
      flexDirection: 'row',
    }
})