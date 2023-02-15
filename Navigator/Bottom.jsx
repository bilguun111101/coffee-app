import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign, Entypo, Ionicons } from '@expo/vector-icons'; 
import { Home, Order, Profile } from "../components";

const Tab = createBottomTabNavigator();

export const BottomTabContainer = () => {
    return (
        <Tab.Navigator
            screenOptions={{ 
                tabBarActiveTintColor: '#000'
            }}
        >
            <Tab.Screen
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-sharp" size={size} color={color} />
                    )
                }} 
            />
            <Tab.Screen 
                name="Order" 
                component={Order} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="shopping-cart" size={size} color={color} />
                    )
                }} 
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};