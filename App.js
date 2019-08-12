import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import FetchApiPage from "./src/FetchApi";

class AppHome extends Component {
  static navigationOptions = {
    title: "Melcom Movies",
    headerStyle: {
      backgroundColor: "#c12312"
    },
    headerTintColor: "#fff",
    HeaderTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View>
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
    Home: { screen: AppHome },
    FetchApi: { screen: FetchApiPage }
  },
  { initialRouteName: "Home" }
);

export default createAppContainer(AppNavigator);
