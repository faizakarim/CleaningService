import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const AppInput = () => {
  return (
    <View>
      <TextInput style={style.input} />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CAD5E2',
    height: 40,
  },
});

export default AppInput;
