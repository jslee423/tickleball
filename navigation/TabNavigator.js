import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SinglesDoubles from "../screens/singlesDoubles";
import TeamName from "../screens/teamName";

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
                } else if (route.name === 'Play') {
                    iconName = focused ? 'sliders' : 'sliders';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'user-circle-o' : 'user-circle-o';
                } else if (route.name === 'TeamName') {
                    iconName = focused ? 'user-circle-o' : 'user-circle-o';
                }

                // You can return any component that you like here!
                // return <Ionicons name={iconName} size={size} color={color} />;
                return <FontAwesome name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name='Home' component={HomePage} />
            <Tab.Screen name='Play' component={SinglesDoubles} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
            <Tab.Screen name='TeamName' component={TeamName} />
        </Tab.Navigator>
    );
};

export default TabNavigator;