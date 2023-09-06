import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Title from './pages/Title';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Tracking from './pages/Tracking';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Title" options={{ headerShown: false }} >
                <Stack.Screen name="Title" options={{ headerShown: false }} component={Title} />
                <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Tracking" options={{ headerShown: false }} component={Tracking} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};