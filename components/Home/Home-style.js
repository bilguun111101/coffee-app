import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    top_section: {
      width: '100%',
      padding: 5,
      flexDirection: 'row',
      position: 'relative',
    },
    logo: {
      width: 168,
      height: 25,
      position: 'absolute',
    },
    pick_up: {
      width: '100%',
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 12,
      backgroundColor: '#000',
    },
    barkley_village: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
    content: {
      flex: 1,
      padding: 11,
    },
    introduction_section: {
      width: '100%',
      height: 204,
    },
    introduction: {
      flex: 1,
      borderRadius: 10,
    },
    favourite_section: {
      width: '100%',
      marginVertical: 30,
    },
    choose_type_section: {
      width: '100%',
      flexDirection: 'column',
      gap: 10,
    },
    type_btns: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    type_products: {
      width: '100%',
      paddingVertical: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    type_btn_active: {
      // borderWidth: 2,
      // paddingHorizontal: 5,
      // borderBottomColor: '#D3A762',
    },
    type_btn: {
      color: '#D3A762',
      fontSize: 17,
      cursor: 'pointer',
    },
    header_section: {
      padding: 10,
      width: '100%',
    },
    bag_icon: {
      position: 'absolute',
      right: 0,
    },
    amount_bag: {
      padding: 2,
      backgroundColor: '#D3A762',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 50,
      position: 'absolute',
      zIndex: 4,
      left: -7,
      top: -7,
    }
})

export default styles;