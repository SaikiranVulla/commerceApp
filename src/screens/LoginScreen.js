import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { RoundButton } from '../components'

export default function LoginScreen({navigation}) {
  return (
    <View style={{flex:1}}>
    <View style={{flex:0.5}}>
    <Image
    style={{flex:1,width:'100%',height:'100%'}}
      source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/003/090/537/small/man-work-from-home-free-vector.jpg'}}
    />

    </View>
    <View style={{flex:0.5,backgroundColor:'#fff',}}>
    <View style={{alignItems:'center'}}>
    <Text style={{fontSize:30,color:'black',fontWeight:'bold'}}>Hello</Text>
    <Text style={{fontSize:20,color:'black',fontWeight:'600'}}>Welcome to our Ecommerce App</Text>
    </View>
    
    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop: 28}}>

    <RoundButton title="Login" backgroundColor="black" color='#fff' />
    <RoundButton title='Sign Up' color='black' onPress={()=>navigation.navigate('Signup')}/>

    </View>
   
    <Text style={{textAlign:'center',marginTop:40}}>or Via Social Media Platform</Text>

    <View style={{flexDirection:'row',alignSelf:'center', marginTop:8}}>
    <TouchableOpacity>
      <Image source={require('../../assets/facebook.png')} style={{width:30,height:30,marginRight:15}} resizeMode='cover'/>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image source={require('../../assets/google.png')} style={{width:30,height:30,marginRight:15}} resizeMode='cover'/>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image source={require('../../assets/linked.png')} style={{width:30,height:30}} resizeMode='cover'/>
    </TouchableOpacity>

    
    



    </View>


    </View>
    </View>
  )
}