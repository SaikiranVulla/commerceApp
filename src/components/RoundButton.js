import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const RoundButton = ({title, backgroundColor, color,onPress}) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderRadius: 18,
        backgroundColor: backgroundColor,
        width: 150,
        paddingHorizontal: 5,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Text style={{color: color, fontSize: 15, fontWeight: '500'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({});
