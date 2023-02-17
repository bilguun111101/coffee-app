import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import { useAuth, useDetailData, useUserData } from "../context";
import { useNavigation } from "@react-navigation/native";
import { Amount, Header, Select, Shot } from './Build';
import selects from "./Build/selects-document.json";
import DropShadow from "react-native-drop-shadow";
import amount from "./coffee-amount.json";
import { useDetail } from "../context";
import { useState } from "react";

export const Detail = () => {
  const { userUid } = useAuth();
  const navigation = useNavigation();
  const { order, total } = useDetail();
  const { setDocumentMyBag } = useUserData();
  const { addiction, detailData } = useDetailData();
  const [sizeOptions, setSizeOptions] = useState( new Array(amount.length).fill(false) );

  const addToBag = () => {
    const new_date = new Date();
    const date = `${new_date.getDate()}-${new_date.getMonth() + 1}-${new_date.getFullYear()}`
    const data = { ...order, date, addiction, uuid: userUid, name: detailData.name, total: +total * order.quantity };
    setDocumentMyBag("myBag", data);
    navigation.navigate("Bottom_tab_container");
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <View>
          <View style={styles.title_section}>
            <Text style={styles.title}>Size options</Text>
          </View>
          <View style={styles.coffee_amount}>
            { amount.map((el, idx) => {
              return (
                <Amount 
                  key={idx}
                  data={el} 
                  booleans={sizeOptions} 
                  setBooleans={setSizeOptions} 
                  index={idx} 
                />
              )
            }) }
          </View>
        </View>
        <View style={styles.flavor_changes_section}>
          <Text style={styles.flavor_changes_text}>Flavor changes</Text>
        </View>
        <Shot />
        { selects.map((el, idx) => <Select name={el.name} title={el.title} options={el.options} key={idx} />) }
      </ScrollView>
      <DropShadow style={styles.add_to_bag_btn}>
        <Pressable style={styles.add_btn} onPress={ () => addToBag() }>
          <Text style={{ color: '#FFF' }}>Add To Bag</Text>
        </Pressable>
      </DropShadow>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
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
    },
    flavor_changes_section: {
      width: '100%',
      marginVertical: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#D3A762',
      paddingBottom: 16,
    },
    flavor_changes_text: {
      fontSize: 16,
      fontWeight: '500',
    },
    add_to_bag_btn: {
      height: 80,
      padding: 16,
      paddingBottom: 30,
      width: '100%',
      backgroundColor: '#FFF',
      flexDirection: 'row',
      alignItems: 'flex-start',
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.4,
      shadowRadius: 10,
    },
    add_btn: {
      width: '100%',
      height: '80%',
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 16,
      backgroundColor: '#D3A762',
    }
})
