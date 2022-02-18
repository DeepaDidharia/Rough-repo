import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>  CHOOSE YOUR GIFT </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'purple',
    height: 60,
  },
  
  text:{
    color: 'lightgreen',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;