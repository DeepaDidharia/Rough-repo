import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import giftScreen from './Screens/giftScreen'
import resultScreen from './Screens/resultScreen'

export default class App extends React.Component {
  render(){
    return (
        <View style={styles.container}>
        <AppContainer />
        </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  GIFTS : {
    screen: giftScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./assets/gift.png")}
          style={{
            width: 25,
            height: 25
          }}
        />
      ),
      tabBarLabel: "GIFTS"
    }
  },
  RESULT: {
    screen: resultScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./assets/result.png")}
          style={{
            width: 20,
            height: 20
          }}
        />
      ),
      tabBarLabel: "RESULT"
    }
  }
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
