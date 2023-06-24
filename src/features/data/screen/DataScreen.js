import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../dataSlice';

const DataScreen = () => {
  const selector = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dataAnime();
  }, []);

  const dataAnime = () => {
    dispatch(fetchData());
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {selector.data.dataIsLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <Text style={{color: '#000', fontSize: 30}}>{selector.data.data}</Text>
      )}
    </View>
  );
};

export default DataScreen;
