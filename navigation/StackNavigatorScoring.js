import { StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SinglesDoubles from "../screens/SinglesDoubles";
import DoublesScoreKeeper from "../screens/DoublesScoreKeeper";

const Stack = createStackNavigator();

const ScoringStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
            <Stack.Screen name='Play' component={SinglesDoubles} />
            <Stack.Screen name='DoublesScoreKeeper' component={DoublesScoreKeeper} />
        </Stack.Navigator>
    );
};

export default ScoringStackNavigator;