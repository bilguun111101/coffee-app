import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import SelectDropdown from 'react-native-select-dropdown';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useDetail, useDetailData } from '../../context';


export const Select = props => {
  const { title, options, name } = props;
  const { setAddiction, addiction } = useDetailData();
  const [active, setActive] = useState(false);
  const [option, setOption] = useState(options[0]);
  const clickSelect = (item) => {
    setActive(!active)
    if (!addiction.includes(item)) setAddiction([ ...addiction, item ]);
    return;
  }
  
  useEffect(() => {
    // setAddiction(old => old.filter((el, idx) => (el !== "" && el !== option)).push(option));
  }, [option])
  return (
    <Pressable style={styles.container} onPress={() => setActive(!active)}>
        <Text style={{ ...styles.title, color: active ? "#969495" : '#D3A762' }}>{ title }</Text>
        <SelectDropdown
            data={options}
            onSelect={(selectedItem, index) => {
              setOption(selectedItem);
              clickSelect(selectedItem);
            }}
            defaultButtonText={option}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={{ ...styles.dropdown1BtnStyle, borderColor: active ? '#969495' : '#D3A762' }}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
                return <AntDesign name={ isOpened ? "up" : "down" } size={24} color="#444" />
            }}
            dropdownStyle={styles.dropdown1DropdownStyle}
          />
    </Pressable>
  )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
    title: {
        fontSize: 12,
        fontWeight: '400',
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
    },
    headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
    saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
    viewContainer: {flex: 1, width: '100%', backgroundColor: '#FFF'},
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
        paddingBottom: '20%',
    },

    dropdown1BtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        marginVertical: 10,
    },
    dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
})
