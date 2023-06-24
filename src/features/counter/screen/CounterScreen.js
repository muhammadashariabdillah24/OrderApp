import {View, Text} from 'react-native';
import React from 'react';
import {ButtonRoundWithOneIcon} from '../component';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../counterSlice';

const CounterScreen = () => {
  const selector = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ButtonRoundWithOneIcon
          onPress={() => dispatch(decrement())}
          text="-"
        />
        <Text style={{color: '#000', fontSize: 25, marginHorizontal: 30}}>
          {selector.counter}
        </Text>
        <ButtonRoundWithOneIcon
          onPress={() => dispatch(increment())}
          text="+"
        />
      </View>
    </View>
  );
};

export default CounterScreen;
