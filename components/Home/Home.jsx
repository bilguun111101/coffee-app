import styles from './Home-style';
import DATA from "./products-data.json";
import TYPE_BTNS from "./type-btns.json";
import { Favourite, ImageSection } from './Build';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { View, Text, SafeAreaView, Image, ScrollView, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_section}>
        <View style={{ width: '100%', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require("../../assets/logo.png")} style={{ width: 170, height: 25 }} />
          <TouchableOpacity style={styles.bag_icon} onPress={() => navigation.navigate("MyBag")}>
            <View style={styles.amount_bag}>
              <Text style={{ color: '#FFF' }}>4</Text>
            </View>
            <SimpleLineIcons name="bag" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top_section}>
          <View style={styles.pick_up}>
            <View style={styles.barkley_village}>
              <Text style={{ color: '#D7DBDD', fontSize: 10 }}>Pick-up store</Text>
              <Text style={{ color: '#FFF', fontSize: 14 }}>Barkley village * 0.5 m</Text>
            </View>
            <AntDesign name='right' size={17} color="#FFF" />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.introduction_section}>
            <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" }} style={styles.introduction} />
          </View>
          <View style={styles.favourite_section}>
            <Text style={{ fontSize: 16 }}>Your favourite</Text>
            <Favourite data={DATA} />
          </View>
          <View style={styles.favourite_section}>
            <Text style={{ fontSize: 16 }}>Seasonal drinks</Text>
            <Favourite data={DATA} />
          </View>
          <View style={styles.choose_type_section}>
            <View style={styles.type_btns}>
              { TYPE_BTNS.map((el, idx) => {
                return (
                  <View style={styles.type_btn_active} key={idx}>
                    <Pressable key={idx}>
                      <Text style={styles.type_btn}>{ el }</Text>
                    </Pressable>
                  </View>
                )
              }) }
            </View>
            <View style={styles.type_products}>
              { DATA.map((el, idx) => <ImageSection data={el} key={idx} />) }
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}