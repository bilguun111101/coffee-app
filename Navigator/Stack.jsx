import { BottomTabContainer } from "./Bottom";
import { createStackNavigator } from "@react-navigation/stack";
import { MyBag, DetailSection, Profile, Home, Order, SignUp, LogIn, Opt } from "../../coffee-app/components";
import { useUserActive } from "../components/context";
import { Otp } from "../components/OTP/Otp";
import { LogInWithPhone } from "../components/LogInWithPhone/LogInWithPhone";

const Stack = createStackNavigator();

export const MyStack = () => {
    const { userActive, otpScreen, productsDataCame, setProductsDataCame } = useUserActive();
    return (
        // <Stack.Navigator>
        //     {
        //         userActive ? (
        //             <>
        //                 <Stack.Screen name="Bottom_tab_container" component={BottomTabContainer} options={{ headerShown: false }} />
        //                 <Stack.Screen name="MyBag" component={MyBag} options={{ headerTitle: "My Bag", headerBackTitleVisible: false, headerTitleStyle: { color: 'black' }, }} />
        //                 <Stack.Screen name="Detail" component={DetailSection} options={{ headerShown: false }} />
        //             </>
        //         ) : (
        //             <>
        //                 <Stack.Screen name="Login" component={LogIn} options={{ headerShown: false }} />
        //                 <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        //                 { otpScreen ? <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} /> : <></> }
        //             </>
        //         )
        //     }
        // </Stack.Navigator>
        <Stack.Navigator>
            <Stack.Screen name="Bottom_tab_container" component={BottomTabContainer} options={{ headerShown: false }} />
            <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
            <Stack.Screen name="LogIn" component={LogInWithPhone} options={{ headerShown: false }} />
            <Stack.Screen name="MyBag" component={MyBag} options={{ headerTitle: "My Bag", headerBackTitleVisible: false, headerTitleStyle: { color: 'black' }, }} />
            <Stack.Screen name="Detail" component={DetailSection} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}