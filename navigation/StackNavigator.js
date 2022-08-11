import { StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import StartScreen from "../screens/StartScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RegisterSuccessScreen from "../screens/RegisterSuccessScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import ResetSentScreen from "../screens/ResetSentScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='startScreen'>
            <Stack.Screen name='startScreen' component={StartScreen} />
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='register' component={RegisterScreen} />
            <Stack.Screen name='registerSuccess' component={RegisterSuccessScreen} />
            <Stack.Screen name='reset' component={ResetPasswordScreen} />
            <Stack.Screen name='resetSent' component={ResetSentScreen} />
            <Stack.Screen name='tab' component={TabNavigator} />
        </Stack.Navigator>
    );
};

export default StackNavigator;