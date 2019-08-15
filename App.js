import React, { Component } from "react";
import {
  Image,
  ScrollView,
  Button,
  Text,
  View,
  Dimensions
} from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";

import FetchApiPage from "./src/FetchApi";
import HomePage from "./src/Home";
import AboutPage from "./src/About";
import ContactPage from "./src/Contact";
import ContactMaterialMenuPage from "./src/ContactMaterialMenu";

const { width } = Dimensions.get("window");

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

customDrawerComponent = props => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("./assets/500.png")}
        style={{ height: 120, width: 150 }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
);
const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomePage,
    About: AboutPage,
    Contact: ContactPage,
    ContactM: ContactMaterialMenuPage,
    FetchApi: FetchApiPage
  },
  {
    contentComponent: customDrawerComponent,
    contentOptions: {
      activeTintColor: "blue"
    },
    drawerPosition: "right",
    drawerWidth: width
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);
