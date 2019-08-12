import React, { Component } from "react";

import {
  StyleSheet,
  Button,
  Text,
  FlatList,
  TextInput,
  View,
  Image,
  ActivityIndicator
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

class Greeting extends Component {
  render() {
    return (
      <View>
        <Text> Hello {this.props.name} !</Text>
      </View>
    );
  }
}

class FetchApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Press Me",
      isLoading: true,
      dataSource: null
    };
  }

  componentDidMount() {
    return (
      fetch("https://facebook.github.io/react-native/movies.json")
        // return fetch('https://melcom.ir/api/demand')
        .then(response => response.json())
        .then(response => {
          this.setState({ isLoading: false, dataSource: response.movies });
        })
        .catch(err => console.log(err))
    );
  }

  static navigationOptions = {
    title: "Movies List",
    headerStyle: {
      backgroundColor: "#c12312"
    }
  };
  render() {
    const { isLoading, dataSource } = this.state;
    const { navigation } = this.props;
    const TitleName = navigation.getParam("group", "All List");
    if (isLoading) {
      return (
        <View style={styles.Container}>
          <Text>Loading ...</Text>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={styles.Container}>
          <Greeting name="Hamid" />
          <TextInput
            placeholder="type something "
            onChangeText={text => this.setState({ text })}
          />
          <Button
            title="Go Back Home"
            // onPress={() => this.props.navigation.navigate("Home")}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text> {TitleName} </Text>
          <FlatList
            data={dataSource}
            // {[
            //   { title: "Hamid" },
            //   { title: "Reza" },
            //   { title: "Golnoosh" }
            // ]}
            renderItem={({ item }) => (
              <View style={styles.items}>
                <Image
                  source={{
                    width: 300,
                    height: 100,
                    uri: "https://via.placeholder.com/300"
                  }}
                />
                <Text> {item.title}</Text>
              </View>
            )}
          />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  items: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    margin: 1,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  }
});

export default FetchApi;
