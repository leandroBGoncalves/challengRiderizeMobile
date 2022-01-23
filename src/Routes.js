import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/home'
import { MonitorDefault } from './pages/monitor';

const Stack = createStackNavigator();

export function Routes() {
    
  return (
 
        <Stack.Navigator 
        initialRouterName='Home'
        screenOptions={{
          headerShown: false
        }}
        >
            <Stack.Screen 
            name="Home" 
            component={Home}
            />

            <Stack.Screen 
            name="Monitor" 
            component={MonitorDefault} 
            />
        </Stack.Navigator>
        

  );
}