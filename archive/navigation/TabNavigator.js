import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SinglesDoubles from '../screens/SinglesDoubles';
// import DoublesScoreKeeper from "../screens/DoublesScoreKeeper";
import RatingScreen from "../screens/RatingScreen.js";
import StackNavigatorScoring from "./StackNavigatorScoring";

const TabNavigator = () => {
    const ProfileScreen = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile!</Text>
            </View>
        )
    }

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home';
                } else if (route.name === 'Rating') {
                    iconName = focused ? 'user-circle-o' : 'user-circle-o';
                } else if (route.name === 'Play') {
                    iconName = focused ? 'play' : 'play';
                }
                // } else if (route.name === 'DoublesScoreKeeper') {
                //     iconName = focused ? 'user-circle-o' : 'user-circle-o';
                // }

                // You can return any component that you like here!
                // return <Ionicons name={iconName} size={size} color={color} />;
                return <FontAwesome name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name='Home' component={HomePage} />
            <Tab.Screen name='Play' component={StackNavigatorScoring} />
            <Tab.Screen name='Rating' component={RatingScreen} />
            {/* <Tab.Screen name='DoublesScoreKeeper' component={DoublesScoreKeeper} /> */}
        </Tab.Navigator>
    );
};

export default TabNavigator;