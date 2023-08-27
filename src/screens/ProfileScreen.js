import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const ProfileScreen = () => {
  const [showPerviewImage, setShowPerviewImage] = useState(false);
  return (
    <View style={{marginTop: 20}}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setShowPerviewImage(true)}>
        <Image
          source={require('../../assets/Profile.png')}
          style={{width: 250, height: 250, borderRadius: 125}}
          // src={require('../../assets/Profile.png')}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Modal transparent={true} visible={showPerviewImage}>
        <View
          style={{
            backgroundColor: '#000000aa',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <View style={{marginTop:100,padding:50,backgroundColor:'#ffffff'}}> */}
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setShowPerviewImage(false)}>
            <Image
              source={require('../../assets/Profile.png')}
              style={{width: 350, height: 350}}
              // src={require('../../assets/Profile.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>

          {/* </View> */}
        </View>
      </Modal>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
