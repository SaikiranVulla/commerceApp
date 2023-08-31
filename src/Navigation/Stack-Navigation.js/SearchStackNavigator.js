import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SearchScreen } from '../../screens';

const Stack  = createNativeStackNavigator();

const SearchStackNavigator = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='SearchScreen' component={SearchScreen}/>
   </Stack.Navigator>
  )
}

export default SearchStackNavigator

const styles = StyleSheet.create({})