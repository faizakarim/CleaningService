import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {Button} from '../Components/Button';
import {useNavigation} from '@react-navigation/native';

export const Auth = () => {
  const navigation = useNavigation();
  return (
    <View style={Style.container}>
      <Image
        source={require('../../../Assets/images/logo.jpg')}
        style={{width: '40%', height: '30%', alignSelf: 'center'}}
      />
      <View style={Style.textView}>
        <Text style={Style.headingOne}>Clean Home</Text>
        <Text style={Style.headingtwo}>Clean Life</Text>
      </View>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  textView: {
    alignSelf: 'center',
    marginBottom: 25,
  },
  headingOne: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headingtwo: {
    fontSize: 20,
    textAlign: 'center',
  },
});
