import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
      <NavigationContainer>
        <TabNavigator/>
        <StatusBar style="auto"/>
      </NavigationContainer>
  );
};
