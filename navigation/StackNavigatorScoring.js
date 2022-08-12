import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SinglesDoubles from "../screens/SinglesDoubles";
import DoublesScoreKeeper from "../screens/DoublesScoreKeeper";
import SinglesScoreKeeper from '../screens/SinglesScoreKeeper';

const Stack = createStackNavigator();

const StackNavigatorScoring = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Play '>
                <Stack.Screen name='Play' component={SinglesDoubles} />
                <Stack.Screen name='DoublesScoreKeeper' component={DoublesScoreKeeper} />
                <Stack.Screen name='SinglesScoreKeeper' component={SinglesScoreKeeper} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigatorScoring;