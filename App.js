import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnterScreen from './screens/EnterScreen';
import SinglesDoubles from './screens/SinglesDoubles';
import SinglesScoreKeeper from './screens/SinglesScoreKeeper';
import DoublesScoreKeeper from './screens/DoublesScoreKeeper';

export default function App() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='enter'>
                <Stack.Screen name='enter' component={EnterScreen} />
                <Stack.Screen name='singlesDoubles' component={SinglesDoubles} />
                <Stack.Screen name='singleGame' component={SinglesScoreKeeper} />
                <Stack.Screen name='doubleGame' component={DoublesScoreKeeper} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
