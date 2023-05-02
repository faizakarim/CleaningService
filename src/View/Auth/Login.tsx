import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppInput from './components/AppInput';
import {Button} from './components/Button';

export const Login = () => {
  return (
    <View style={style.container}>
      <Image
        source={require('../../../Assets/images/logo.jpg')}
        style={style.image}
      />
      <View style={{marginHorizontal: 15}}>
        <Text style={style.text}>Email</Text>
        <AppInput />
        <Text style={style.text}>Password</Text>
        <AppInput />
        <Button title="Login" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '900',
  },
  image: {
    width: '40%',
    height: '30%',
    alignSelf: 'center',
  },
});
