import { Text, SafeAreaView, StyleSheet, View, Image, Button, ImageBackground,  TextInput, Alert, Pressable } from 'react-native';
import React, {useState}  from 'react';

import { Card } from 'react-native-paper';


// or any files within the Snack
import AssetExample from './components/AssetExample';

const RegisterPage = ({navigation}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }


  return(
    <View style={styles.container}>
    <Image style={styles.profile}
  source={require('./profile.jpg')}
  />
  <Text style={styles.title}>Halaman Pendaftaran</Text>
  <Text style={styles.topinput}>Email</Text>
  <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Masukkan Email"
      />
      <Text style={styles.topinput}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Masukkan Password"
      />
      <Pressable
        onPress={() => {
          navigation.navigate("Porto")
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#d9d9d9' : '#ABABAB', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 195, paddingRight: 195, padding: 12, borderRadius: 9, marginTop: 30, marginBottom: 30,
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Daftar' : 'Daftar'}</Text>
        )}
      </Pressable>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9'}} />
  <View>
    <Text style={{width: 30, textAlign: 'center', color: '#d9d9d9'}}>or</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9'}} />
</View>
<Pressable
        onPress={() => {
          navigation.navigate("Porto")
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#d9d9d9' : '#ABABAB', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 135, paddingRight: 135, padding: 12, borderRadius: 9, marginTop: 30, marginBottom: 10,
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Continue With Google' : 'Continue With Google'}</Text>
        )}
      </Pressable>
<Text
onPress={() => {
          navigation.navigate("Login")
        }}
 style={styles.outerText}>Sudah memiliki akun? <Text style={styles.innerText}> Log in</Text> </Text>
    </View>
    
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 128,
    height: 128,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 110,
    marginBottom: 20,
    borderRadius: 100,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#d9d9d9'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 40,
  },
  topinput: {
    marginLeft: 15,
    fontSize: 12
  },
  text: {
    fontSize: 16,
    color: 'white'
  },
  outerText: {
    textAlign: 'center',
    marginTop: 20,
  },
  innerText: {
    color: 'blue'
  }
});

export default RegisterPage;