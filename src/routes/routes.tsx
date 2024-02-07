import React from 'react';
import { View, Text } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign } from '@expo/vector-icons'; 

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen/ShoppingCart';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import { theme } from '../theme';

type TabParamList = {
    HomeScreen: undefined;
    FavoritesScreen: undefined;
    ProfileScreen: undefined;
    ShoppingCartScreen: undefined;  
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabBottomRoutes() {
  return (
    <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveBackgroundColor: theme.colors.GRAY,
        }}
    >
        <Tab.Screen 
            name='HomeScreen'
            component={HomeScreen}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
                tabBarLabel: '',
            }}
        />
        <Tab.Screen 
            name='FavoritesScreen'
            component={FavoritesScreen}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='heart' color={color} size={size}/>,
                tabBarLabel: '',
            }}
        />
        <Tab.Screen 
            name='ShoppingCartScreen'
            component={ShoppingCartScreen}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='shopping-cart' color={color} size={size}/>,
                tabBarLabel: '',
            }}
        />
        <Tab.Screen 
            name='ProfileScreen'
            component={ProfileScreen}
            options={{
                tabBarIcon: ({color, size}) => <AntDesign name='profile' color={color} size={size}/>,
                tabBarLabel: '',
            }}
        />
    </Tab.Navigator>
  )
}