import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Left, Right, Icon } from "native-base";

class About extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="about" style={{ fontSize: 24, color: tintColor }} />
    )
  };
  render() {
    return (
      <View>
        <Header>
          <Right>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Right>
        </Header>
        <Text> ABout Us</Text>
        <Text> Melcom</Text>
      </View>
    );
  }
}

export default About;
