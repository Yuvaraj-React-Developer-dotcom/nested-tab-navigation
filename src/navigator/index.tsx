import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../module/BottomScreens/HomeTab';
import ListTab from '../module/BottomScreens/ListTab';
import DetailTab from '../module/BottomScreens/DetailTab';
import Profiletab from '../module/BottomScreens/Profiletab';
import SettingTab from '../module/BottomScreens/SettingTab';
import {NavigationContainer} from '@react-navigation/native';
const index = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="tab1"
          options={{
            headerShown: false,
          }}
          component={HomeTab}
        />
        <Tab.Screen
          name="tab2"
          options={{
            headerShown: false,
          }}
          component={ListTab}
        />
        <Tab.Screen
          name="tab3"
          options={{
            headerShown: false,
          }}
          component={DetailTab}
        />
        <Tab.Screen
          name="tab4"
          options={{
            headerShown: false,
          }}
          component={Profiletab}
        />
        <Tab.Screen
          name="tab5"
          options={{
            headerShown: false,
          }}
          component={SettingTab}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default index;

const styles = StyleSheet.create({});
