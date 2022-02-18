import React from 'react';
import { Text, View, Image, TouchableOpacity, Button, StyleSheet, Card} from 'react-native';
import AppHeader from '../components/AppHeader';
import { Link } from 'react-router';


export default class GiftScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          {' '}
          <AppHeader />{' '}
        </View>


        <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
          <Image
            source={require('../assets/giftbox1.png')}
            style={{
              width: 250,
              height: 170,
              borderColor :"red",
              borderWidth: 5,
              borderRadius : 18
            }}
          />
          <TouchableOpacity>
         <Button
           title = "Gift Box 1" 
           color = "red"
           
          />

          </TouchableOpacity>
       </View>


       <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
          <Image
            source={require('../assets/giftbox2.png')}
            style={{
              width: 250,
              height: 170,
               borderColor :"blue",
              borderWidth: 5,
              borderRadius : 18
            }}
          />

           <TouchableOpacity>
         <Button
           title = "Gift Box 2" 
           color = "blue"
           
          />

          </TouchableOpacity>
       </View>
      </View>
    );
  }
}

