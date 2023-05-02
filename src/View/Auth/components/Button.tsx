import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IProps {
  title: string;
  onPress?: () => void;
}

export const Button: React.FC<IProps> = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={Style.button} onPress={onPress}>
        <Text style={Style.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Style = StyleSheet.create({
  button: {
    backgroundColor: '#2a97e0',
    width: '70%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
});
