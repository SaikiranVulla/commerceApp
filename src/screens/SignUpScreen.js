import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import { _signInWithGoogle } from '../config/firebase/GoogleSignIn';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{
    console.log("fg");
  },[])

  const googleSignIn = async () =>{
    _signInWithGoogle().then(data => {
      if(data){
        console.log("=>Success", data);
        return;
      }
      console.log("error", data);
    })

  }

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff', padding: 15}}>
      <Text style={{fontSize: 42, fontWeight: '800', color: 'black'}}>
        SignUp
      </Text>
      <Text style={{color: 'grey', fontSize: 20, marginTop: 8}}>
        Signup here{' '}
      </Text>
      <View style={{marginTop: 50}}>
        <Text style={{fontSize: 16, fontWeight: '800'}}>Email Id </Text>
        <TextInput
          placeholder="Email"
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 4,
            marginTop: 6,
            borderRadius: 7,
          }}
          value={name}
          onChangeText={value => setName(value)}
        />
      </View>
      <View style={{marginTop: 15}}>
        <Text style={{fontSize: 16, fontWeight: '800'}}>Password</Text>
        <TextInput
          placeholder="Password"
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 4,
            marginTop: 6,
            borderRadius: 7,
          }}
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </View>
      <TouchableOpacity style={{
        backgroundColor:'black',
        borderWidth:1,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:12,
        paddingHorizontal:8,
        marginTop:30,
      }}
      onPress={()=>navigation.navigate("Home2")}>
        <Text style={{color:'#fff',fontSize:18,fontWeight:'700'}}>Login</Text>
      </TouchableOpacity>

      <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
        <Text style={{color:'grey', fontSize:16}}>Don't have an account ? <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>SignUp</Text> </Text>
      </View>
      <Text style={{textAlign: 'center', marginTop: 40}}>
        or Via Social Media Platform
      </Text>

      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 8}}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/facebook.png')}
            style={{width: 30, height: 30, marginRight: 15}}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>googleSignIn()}>
          <Image
            source={require('../../assets/google.png')}
            style={{width: 30, height: 30, marginRight: 15}}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('../../assets/linked.png')}
            style={{width: 30, height: 30}}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
