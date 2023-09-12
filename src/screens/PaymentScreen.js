import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../common/Input';

const PaymentScreen = () => {
  const [searchValue, setSearchValue] = useState();
  return (
    <View>
      <Input
        placeholderText="Search for Prevoius Payments"
        intputValue={searchValue}
        onChangeText={value => setSearchValue(value)}
      />
      <Text>PaymentScreen</Text>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
