import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SearchScreen, ProfileScreen, CartScreen} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStackNavigator,CartStackNavigator,SearchStackNavigator,ProfileStackNavigator } from './Stack-Navigation.js';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }else {
              iconName = focused ? 'cart' : 'cart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeStackNavigator} options={{headerShown: false}} />
        <Tab.Screen name="Search" component={SearchStackNavigator} options={{headerShown:false}} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
        <Tab.Screen name="Cart" component={CartStackNavigator} />
      </Tab.Navigator>
  );
};

export default BottomTabNavigator;
