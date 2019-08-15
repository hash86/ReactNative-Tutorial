import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Left, Right, Icon } from "native-base";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FetchApiPage from "./FetchApi";
import AboutPage from "./About";
import HomePage from "./Home";

class ContactMaterialMenu extends Component {
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
        <Text>Contact US material</Text>
      </View>
    );
  }
}

const menu = createMaterialBottomTabNavigator(
  {
    ContactM: ContactMaterialMenu,
    Home: HomePage,
    About: {
      screen: AboutPage,
      navigationOptions: {
        barStyle: { backgroundColor: "pink" }
      }
    },
    Data: FetchApiPage
  },

  {
    initialRouteName: "ContactM",

    activeTintColor: "orange",
    inactiveTintColor: "grey",
    barStyle: { backgroundColor: "teal" },
    shifting: false //disable animations
  }
);

export default createAppContainer(menu);
