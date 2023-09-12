import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const Input = ({placeholderText, inputValue, onChangeText}) => {
  return (
    <View style={{marginHorizontal: 25}}>
      <TextInput
        placeholder={placeholderText}
        value={inputValue}
        onChangeText={onChangeText}
        style={{
          marginVertical: 20,
          borderWidth: 1,
          borderRadius: 5,
          paddingVertical: 8,
          paddingHorizontal: 5,
        }}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
