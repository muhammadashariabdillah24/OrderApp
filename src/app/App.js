import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import CounterScreen from '../features/counter/screen/CounterScreen';
import DataScreen from '../features/data/screen/DataScreen';
import store from './configureStore';

const App = () => {
  return (
    <Provider store={store}>
      {/* <CounterScreen /> */}
      <DataScreen />
    </Provider>
  );
};

export default App;
