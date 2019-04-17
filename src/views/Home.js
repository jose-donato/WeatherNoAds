import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { Button, Headline, Card, Title } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

function Home(props) {
  const [text, setText] = useState("");

  const search = () => {
    if (text === "") {
      return;
    }
    Actions.results({ search: text });
  };

  function getLastSearch() {
    if (props.lastSearch !== undefined) {
      return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Headline style={styles.headline2}>Your last location</Headline>
          <Button
            mode="contained"
            onPress={() => Actions.weather(props.lastSearch)}
            style={styles.buttonLast}
          >
            <Text style={styles.text}>{props.lastSearch.cityName}</Text>
          </Button>
        </View>
      );
    }
  }

  return (
    <LinearGradient
      colors={["#5ecbed", "#165679"]}
      style={styles.linearGradient}
    >
      <Headline style={styles.headline}>Weather without ads</Headline>
      <TextInput
        value={text}
        onChangeText={text => setText(text)}
        textAlign={"center"}
        placeholder="Enter your location"
        placeholderTextColor="#eae8e5"
        style={styles.input}
      />
      <Button mode="contained" onPress={search} style={styles.button}>
        <Text style={styles.text}>Search</Text>
      </Button>
      {getLastSearch()}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  input: {
    width: "60%",
    padding: 10,
    backgroundColor: "transparent",
    color: "#f5f2ed",
    borderBottomColor: "#f5f2ed",
    borderBottomWidth: 2,
    marginTop: 20,
    fontFamily: "SairaSemiCondensed-Regular",
    fontSize: 15
  },
  button: {
    marginTop: 20,
    width: 120,
    padding: 10,
    fontFamily: "BebasNeue-Regular"
  },
  buttonLast: {
    marginTop: 20,
    padding: 10,
    fontFamily: "BebasNeue-Regular"
  },
  text: { color: "#6f6f6f", fontFamily: "BebasNeue-Regular" },
  headline: {
    fontFamily: "BebasNeue-Regular",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#fff"
  },
  headline2: {
    fontFamily: "BebasNeue-Regular",
    marginTop: 20,
    marginBottom: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#fff"
  },
  card: { backgroundColor: "#fff", maxHeight: 100 },
  content: { padding: 5, margin: 0 },
  cardTitle: {
    color: "#6f6f6f",
    fontSize: 14,
    fontFamily: "BebasNeue-Regular"
  }
});

function mapStateToProps(state) {
  return {
    lastSearch: state.lastSearch
  };
}

export default connect(mapStateToProps)(Home);
