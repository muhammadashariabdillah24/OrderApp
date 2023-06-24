import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonRoundWithOneIcon = ({onPress, text}) => {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4287f5',
      }}
      onPress={onPress}>
      <Text style={{textAlign: 'center', color: '#fff', fontSize: 25}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonRoundWithOneIcon;
