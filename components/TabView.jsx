import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Text, StyleSheet } from 'react-native';
import { Card } from './Order/Build';
import { useUserData } from './context';

export function TabViewSection() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Processing', title: 'Processing' },
    { key: 'Success', title: 'Success' },
    { key: 'Cancelled', title: 'Cancelled' }
  ]);

  const { orders } = useUserData();

    const Processing = (props) => {
        let number = 0;
        return (
            <View style={styles.container}>
                { orders?.map((el, idx) => <Card key={idx} element={el} number={number} />) }
            </View>
        )
    }

    const Success = (props) => {
        return (
            <View style={styles.container}>
                { orders?.map((el, idx) => <Card key={idx} />) }
            </View>
        )
    }

    const Cancelled = (props) => {
        return (
            <View style={styles.container}>
                { orders?.map((el, idx) => <Card key={idx} />) }
            </View>
        )
    }

    const renderScene = SceneMap({
        Processing,
        Success,
        Cancelled,
    });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => {
        return (
            <TabBar
                { ...props }
                indicatorStyle={{ backgroundColor: '#000' }}
                tabStyle={{ backgroundColor: 'white' }}
                renderLabel={({ route, focused, color }) => (
                    <Text style={{ color: '#000' }}>
                        { route.title }
                    </Text>
                )}
            />
        )
      }}
    />
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 16,
    },
})