import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

export const Auth = () => {
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
