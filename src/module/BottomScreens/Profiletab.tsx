import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../HomeModule/Home';
import ScreenOne from '../HomeModule/ScreenOne';
import ScreenTwo from '../HomeModule/ScreenTwo';
import ScreenThree from '../HomeModule/ScreenThree';

const ProfileTab = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileTab" component={Home} />
      <Stack.Screen name="screenOne" component={ScreenOne} />
      <Stack.Screen name="screenTwo" component={ScreenTwo} />
      <Stack.Screen name="screenThree" component={ScreenThree} />
    </Stack.Navigator>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({});
