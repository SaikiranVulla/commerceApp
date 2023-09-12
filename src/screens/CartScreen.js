import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../common/Input';

const CartScreen = () => {
  const [searchValue, setSearchValue] = useState();
  return (
    <View>
      <Input
        placeholderText="Search for Your Products"
        inputValue={searchValue}
        onChangeText={value => setSearchValue(value)}
      />
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
