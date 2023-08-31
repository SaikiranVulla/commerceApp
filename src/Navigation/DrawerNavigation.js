import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from './BottomTabNavigation';
import { NotificationScreen, PaymentScreen } from '../screens';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='HomeTabs' component={BottomTabNavigator} options={{
        headerShown: false,
      }}/>
      <Drawer.Screen name='Payment' component={PaymentScreen}/>
      <Drawer.Screen name='Notification' component={NotificationScreen}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})