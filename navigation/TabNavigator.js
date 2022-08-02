import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import { Text, View } from 'react-native';

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
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomePage} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
            <Tab.Screen name='Settings' component={HomePage} />
        </Tab.Navigator>
    );
};

export default TabNavigator;