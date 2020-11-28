/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const App = () => {
  function handleOnPress() {
    console.log('pressed');
  }
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={{
        height: 100,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
      }}>
      <Text style={{fontSize: 14}}>Hello</Text>
    </TouchableOpacity>
  );
};

export default App;
