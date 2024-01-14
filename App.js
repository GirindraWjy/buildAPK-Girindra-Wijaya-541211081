import { Text, SafeAreaView, StyleSheet, View, Image, Button, ImageBackground,  TextInput, Alert, Pressable } from 'react-native';
import React, {useState}  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PortoPage from './porto';
import LoginPage from './login';
import RegisterPage from './register';



import { Card } from 'react-native-paper';


// or any files within the Snack
import AssetExample from './components/AssetExample';

const Stack = createStackNavigator();


const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={"Login"} component={LoginPage}/>
        <Stack.Screen name={"Register"} component={RegisterPage}/>
        <Stack.Screen name={"Porto"} component={PortoPage}/>
      </Stack.Navigator>
    </NavigationContainer>
);
};

export default App;

