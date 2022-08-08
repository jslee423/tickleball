import { StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='tab' component={TabNavigator} />
        </Stack.Navigator>
    );
};

export default StackNavigator;