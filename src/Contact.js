import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Left, Right, Icon } from "native-base";

class Contcat extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="contact" style={{ fontSize: 24, color: tintColor }} />
    )
  };
  render() {
    return (
      <View>
        <Text>Contact US</Text>
      </View>
    );
  }
}

export default Contcat;
