import {
  StyleSheet,
  Text,
  TextInput,
  View,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Slider, Button, Icon} from '@rneui/themed';
import Geolocation from '@react-native-community/geolocation';
const gymList = [
  {
    id: 1,
    name: 'Coffee Shop',
    latitude: 37.4223232,
    longitude: 122.0820273,
    imageURL: 'https://example.com/images/coffee_shop.jpg',
  },
  {
    id: 2,
    name: 'Park',
    latitude: 37.4214568,
    longitude: 122.0849279,
    imageURL: 'https://example.com/images/park.jpg',
  },
  {
    id: 3,
    name: 'Restaurant',
    latitude: 37.4221345,
    longitude: 122.0834501,
    imageURL: 'https://example.com/images/restaurant.jpg',
  },
  {
    id: 4,
    name: 'Grocery Store',
    latitude: 37.4217685,
    longitude: 122.0858923,
    imageURL: 'https://example.com/images/grocery_store.jpg',
  },
  {
    id: 5,
    name: 'Gym',
    latitude: 37.4208902,
    longitude: 122.0845347,
    imageURL: 'https://example.com/images/gym.jpg',
  },
];

const SearchScreen = () => {
  const [distance, setDistance] = useState(1);
  const [enterLocation, setEnterLocation] = useState('');
  const [userLatitude, setUserLatitude] = useState();
  const [userLongitude, setUserLongitude] = useState();
  const [gyms, setGyms] = useState([
    {
      id: 1,
      name: 'Coffee Shop',
      latitude: 37.4223232,
      longitude: 122.0820273,
      imageURL: 'https://example.com/images/coffee_shop.jpg',
    },
    {
      id: 2,
      name: 'Park',
      latitude: 37.4214568,
      longitude: 122.0849279,
      imageURL: 'https://example.com/images/park.jpg',
    },
    {
      id: 3,
      name: 'Restaurant',
      latitude: 37.4221345,
      longitude: 122.0834501,
      imageURL: 'https://example.com/images/restaurant.jpg',
    },
    {
      id: 4,
      name: 'Grocery Store',
      latitude: 37.4217685,
      longitude: 122.0858923,
      imageURL: 'https://example.com/images/grocery_store.jpg',
    },
    {
      id: 5,
      name: 'Gym',
      latitude: 37.4208902,
      longitude: 122.0845347,
      imageURL: 'https://example.com/images/gym.jpg',
    },
  ]);

  console.log(gyms, 'gymsd');

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App Location Permission',
          message: 'App required Your Location Permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(info => {
          console.log(info.coords.latitude);
          console.log(info.coords.longitude);
          setUserLatitude(info.coords.latitude);
          setUserLongitude(info.coords.longitude);
        });
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleSearch = () => {
    const filteredLocation = gyms.filter(i =>
      i.name.toLowerCase().includes(enterLocation.toLowerCase()),
    );
    setGyms(filteredLocation);
    console.log(filteredLocation, 'search');
  };

  const handleReset = () => {
    setGyms(gymList);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5}}>
        <TextInput
          placeholder="Search Locations"
          value={enterLocation}
          onChangeText={value => setEnterLocation(value)}
          style={{
            borderWidth: 1,
            borderRadius: 15,
            marginHorizontal: 35,
            marginVertical: 12,
            paddingHorizontal: 12,
            paddingVertical: 15,
            fontSize: 18,
          }}
        />
        <View style={{padding: 10, marginHorizontal: 25}}>
          <Text style={{textAlign: 'center'}}>Distance:   {distance} KM</Text>
          <Slider
            value={distance}
            maximumValue={50}
            minimumValue={1}
            onValueChange={value => {setDistance(value)}}
            step={1}
            allowTouchTrack={true}
            thumbStyle={{width: 20, height: 20, backgroundColor: 'black'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 35,
          }}>
          <Button
            onPress={() => handleReset()}
            containerStyle={{width: '49%', borderRadius: 5}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
                marginRight: 10,
              }}>
              Reset
            </Text>
            <Icon name="refresh" color="white" />
          </Button>
          <Button
            onPress={() => handleSearch()}
            containerStyle={{width: '49%', borderRadius: 5}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
                marginRight: 12,
              }}>
              Search
            </Text>
            <Icon name="search" color="white" />
          </Button>
        </View>
      </View>

      <MapView
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.4219872,
          longitude: 122.0840072,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{flex: 1}}>
        {gyms?.map(iGym => {
          return (
            <View key={iGym.id}>
              <Marker
                coordinate={{
                  latitude: iGym.latitude,
                  longitude: iGym.longitude,
                }}>
                <Callout style={{width: 150, height: 150}}>
                  <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <Text>{iGym.name}</Text>
                    <Image
                      source={{uri: iGym.imageURL}}
                      style={{width: 100, height: 100}}
                    />
                  </View>
                </Callout>
              </Marker>
            </View>
          );
        })}
      </MapView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
