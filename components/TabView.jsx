import * as React from 'react';
import { Card } from './Order/Build';
import { useAuth } from './context';
import { Text, StyleSheet } from 'react-native';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useGet_data_second_collection } from './hook/get_data_second_collection';

export function TabViewSection() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Processing', title: 'Processing' },
    { key: 'Success', title: 'Success' },
    { key: 'Cancelled', title: 'Cancelled' }
  ]);
  const { userUid } = useAuth();
  const orders = useGet_data_second_collection("order", userUid);

    const Processing = (props) => {
        let number = 0;
        const data = orders?.filter((el, idx) => el.process === "Processing");
        return (
            <View style={styles.container}>
                { data?.map((el, idx) => {
                    number++;
                    return (
                        <>
                            <Card key={idx} element={el} number={number} />
                        </>
                    )
                }) }
            </View>
        )
    }

    const Success = (props) => {
        let number = 0;
        const data = orders?.filter((el, idx) => el.process === "Success");
        return (
            <View style={styles.container}>
                { data?.map((el, idx) => {
                    number++;
                    return (
                        <Card key={idx} element={el} number={number} />
                    )
                }) }
            </View>
        )
    }

    const Cancelled = (props) => {
        let number = 0;
        const data = orders?.filter((el, idx) => el.process === "Cancelled");
        return (
            <View style={styles.container}>
                { data?.map((el, idx) => {
                    number++;
                    return (
                        <Card key={idx} element={el} number={number} />
                    );
                })}
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
                indicatorStyle={{ backgroundColor: 'orange' }}
                tabStyle={{ backgroundColor: '#FFF' }}
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