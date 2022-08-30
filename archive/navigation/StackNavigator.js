import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import StartScreen from "../screens/StartScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RegisterSuccessScreen from "../screens/RegisterSuccessScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import ResetSentScreen from "../screens/ResetSentScreen";
import EnterScreen from "../screens/EnterScreen";
import SinglesDoubles from "../screens/SinglesDoubles";
import DoublesScoreKeeper from "../screens/DoublesScoreKeeper";
import SinglesScoreKeeper from '../screens/SinglesScoreKeeper';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='enter'>
            <Stack.Screen name='startScreen' component={StartScreen} />
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='register' component={RegisterScreen} />
            <Stack.Screen name='registerSuccess' component={RegisterSuccessScreen} />
            <Stack.Screen name='reset' component={ResetPasswordScreen} />
            <Stack.Screen name='resetSent' component={ResetSentScreen} />
            <Stack.Screen name='tab' component={TabNavigator} />
            <Stack.Screen name='enter' component={EnterScreen} />
            <Stack.Screen name='singlesDoubles' component={SinglesDoubles} />
            <Stack.Screen name='DoublesScoreKeeper' component={DoublesScoreKeeper} />
            <Stack.Screen name='SinglesScoreKeeper' component={SinglesScoreKeeper} />
        </Stack.Navigator>
    );
};

export default StackNavigator;