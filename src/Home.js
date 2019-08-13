import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import FetchApiPage from "./FetchApi";
import { Header, Left, Right, Icon } from "native-base";

class Home extends Component {
  static navigationOptions = {
    title: "Melcom Movies",
    headerStyle: {
      backgroundColor: "#c12312"
    },
    headerTintColor: "#fff",
    HeaderTitleStyle: {
      fontWeight: "bold"
    },
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
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
        <Text> Hamid </Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate("FetchApi", { group: "Movies" })
          }
          title="Load Data"
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    FetchApi: { screen: FetchApiPage }
  },
  { initialRouteName: "Home" }
);

export default createAppContainer(AppNavigator);
