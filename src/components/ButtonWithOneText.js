import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonWithOneText = ({onPress, text}) => {
  return (
    <TouchableOpacity
      style={{
        width: '80%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Text style={{fontSize: 20, color: '#000'}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithOneText;
