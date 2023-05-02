import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from './components/Button';
import AppInput from './components/AppInput';

export const SignUp = () => {
  return (
    <View style={style.container}>
      <Image
        source={require('../../../Assets/images/logo.jpg')}
        style={style.image}
      />
      <View style={style.innerView}>
        <Text style={style.text}>Full Name</Text>
        <AppInput />
        <Text style={style.text}>Phone</Text>
        <AppInput />
        <Text style={style.text}>Email</Text>
        <AppInput />
        <Text style={style.text}>Password</Text>
        <AppInput />
        <Button title="Create Account" />
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
  innerView: {
    marginHorizontal: 15,
  },
});
