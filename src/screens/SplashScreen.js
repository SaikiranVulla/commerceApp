import {View, Text, Image, ImageBackground} from 'react-native';
import React,{useEffect} from 'react';

export default function SplashScreen({navigation}) {
  setTimeout(()=>{
    navigation.navigate('Login')
  },4000);

  return (
    <ImageBackground
      source={require('../../assets/splash.png')}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 24, fontWeight: '600'}}>
        E-commerce App
      </Text>
    </ImageBackground>
  );
}
