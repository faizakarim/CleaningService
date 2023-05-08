import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '../Components/Button';
import AppInput from '../Components/AppInput';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';

export const SignUp = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const navigation = useNavigation();
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
        <Text style={style.text}>Looking for</Text>
        <Picker
          selectedValue={selectedLanguage}
          style={{
            backgroundColor: 'red',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#CAD5E2',
          }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="looking for job" value="1" />
          <Picker.Item label="lookin for employee" value="2" />
        </Picker>
        <Button
          title="Create Account"
          onPress={() => navigation.navigate('homescreen')}
        />
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
