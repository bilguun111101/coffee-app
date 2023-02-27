import { BottomTabContainer } from "./Bottom";
import { createStackNavigator } from "@react-navigation/stack";
import { MyBag, DetailSection, Start } from "../../coffee-app/components";
import { useUserActive, useUserData } from "../components/context";
import { Otp } from "../components/OTP/Otp";
import { LogInWithPhone } from "../components/LogInWithPhone/LogInWithPhone";

const Stack = createStackNavigator();

export const MyStack = () => {
    const { products } = useUserData();
    return (
        <Stack.Navigator>
            {
                !products.loading ? (
                    <>
                        <Stack.Screen name="Bottom_tab_container" component={BottomTabContainer} options={{ headerShown: false }} />
                        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
                        <Stack.Screen name="MyBag" component={MyBag} options={{ headerTitle: "My Bag", headerBackTitleVisible: false, headerTitleStyle: { color: 'black' }, }} />
                        <Stack.Screen name="Detail" component={DetailSection} options={{ headerShown: false }} />
                        <Stack.Screen name="LogIn" component={LogInWithPhone} options={{ headerShown: false }} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
                    </>
                )
            }
        </Stack.Navigator>
    )
}