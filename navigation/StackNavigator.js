import { StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import StartScreen from "../screens/StartScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='startScreen'>
            <Stack.Screen name='startScreen' component={StartScreen} />
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='register' component={RegisterScreen} />
            <Stack.Screen name='tab' component={TabNavigator} />
        </Stack.Navigator>
    );
};

export default StackNavigator;