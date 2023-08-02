import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {SplashScreen, LoginScreen, SignUpScreen} from './src/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './src/Navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home2"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
