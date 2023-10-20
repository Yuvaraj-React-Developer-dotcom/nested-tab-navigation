import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
interface ScreenOne {
  navigation: any;
}
const Home: React.FC<ScreenOne> = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={{marginTop: 20, borderWidth: 1, padding: 10}}
        onPress={() => {
          navigation.navigate('screenOne');
        }}>
        <Text>Go to next Screen one</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
