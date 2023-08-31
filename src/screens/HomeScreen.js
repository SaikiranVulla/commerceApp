import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Alert,
  Appearance
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import {optionsData, scrollData} from '../constant/GlobalData';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/FontAwesome';

const scrollImages = [
  require('../../assets/appliance.jpg'),
  require('../../assets/earphone.png'),
  require('../../assets/laptop-offer.jpg'),
  require('../../assets/moblie-offer.png'),
  require('../../assets/Tv-offer.jpg'),
];

const colorScheme = Appearance.getColorScheme();

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:28,marginVertical:12}}>
    <Icon name='bars' size={20} onPress={()=>navigation.toggleDrawer()}/>
    <Icon name='bell-o' size={20} onPress={()=>navigation.navigate('Notification')} />

    </View>
      <View style={styles.searchBarContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.searchBar}>
            <View style={styles.inputContainer}>
              <Ionicons name="search" size={20} />
              <TouchableOpacity
                activeOpacity={0.6}
                style={{width: '70%', marginLeft: 8}}
                onPress={() => navigation.navigate('Search')}>
                <Text style={{fontSize: 18}}>Search Amazon.in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{marginHorizontal: 8}}>
                <FontAwesome name="microphone" size={20} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={{marginLeft: 8}}>
                <Ionicons name="camera-outline" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.addressDeliverContainer}>
        <View style={styles.innerDeliverContainer}>
          <SimpleLineIcon name="location-pin" size={20} />
          <View style={{marginLeft: 8}}>
            <Text>Deliver to Sai Kiran - Visakhapatnam 530027</Text>
          </View>
          <Ionicons name="chevron-down" size={20} />
        </View>
      </TouchableOpacity>

      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={optionsData}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View
                key={item.id}
                style={{alignItems: 'center', marginRight: 10}}>
                <View style={{width: 60, height: 60, borderRadius: 30}}>
                  <Image
                    source={item.image}
                    style={{width: 50, height: 50}}
                    resizeMode="contain"
                  />
                </View>
                <Text>{item.Name}</Text>
              </View>
            );
          }}
        />
      </View>

      <View>
      <SliderBox
        images={scrollImages}
        dotColor="orange"
        inactiveDotColor="gray"
        autoplay
        autoplayInterval={3000}
        circleLoop
        onCurrentImagePressed={index => Alert.alert(`image ${index} pressed`)}
      />
      </View>
      
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme === 'light' ?'#FFFFFF' : 'gray',
  },
  innerContainer: {
    marginHorizontal: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 15,
    width: '100%',
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderColor: '#D3D3D3',
  },
  searchBarContainer: {
    backgroundColor: 'lightblue',
    paddingBottom: 10,
  },
  addressDeliverContainer: {
    backgroundColor: '#E0FFFF',
    paddingVertical: 10,
  },
  innerDeliverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
});
