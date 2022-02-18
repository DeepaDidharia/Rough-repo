import React from 'react';
import { Text, View, Image } from 'react-native';
import AppHeader2 from '../components/AppHeader2';

export default class ResultScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          {' '}
          <AppHeader2 />{' '}
        </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>


          <Text style={{ textAlign: 'center', fontSize: 30 , color:'red' }}>Hi ............... </Text>
          <Text style={{ textAlign: 'center', fontSize: 20 , color:'red' }}>You have chose goft box ...... </Text>
          <Text style={{ textAlign: 'center', fontSize: 20 , color:'red' }}>So, according to that, your gift is...........</Text>
        </View>
      </View>
    );
  }
}
