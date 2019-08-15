import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Left, Right, Icon } from "native-base";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import FetchApiPage from "./FetchApi";
import AboutPage from "./About";
import HomePage from "./Home";

class Contcat extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="contact" style={{ fontSize: 24, color: tintColor }} />
    ),
    tabBarIcon: ({ tintColor }) => (
      <Icon name="contact" style={{ fontSize: 24, color: tintColor }} />
    ),
    tabBarLabel: "تماس با ما"
  };
  render() {
    return (
      <View>
        <Text>Contact US</Text>
      </View>
    );
  }
}

const bottomTabNavigation = createBottomTabNavigator({
  Contact: Contcat,
  Home: HomePage,
  About: AboutPage,
  Data: FetchApiPage
});

export default createAppContainer(bottomTabNavigation);
