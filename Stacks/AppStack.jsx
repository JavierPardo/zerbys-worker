import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import routes from '../routes';
import ProfileScreen from '../Screens/User/ProfileScreen';

const MainStack = createNativeStackNavigator();
export default function AppStack() {
    return (
            <MainStack.Navigator>
                <MainStack.Screen name={routes.private.profile} component={ProfileScreen} options={{ headerShown: false }} />
            </MainStack.Navigator>
    )
}

const styles = StyleSheet.create({})
