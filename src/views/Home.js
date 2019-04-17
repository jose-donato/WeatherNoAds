import React, { useState } from "react";
import { StyleSheet, TextInput, Image, Text } from "react-native";
import { Button, Headline } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { Actions } from "react-native-router-flux";

function Home() {
  const [text, setText] = useState("");

  const search = () => {
    if (text === "") {
      return;
    }
    Actions.results({ search: text });
  };

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
    fontFamily: "BebasNeue-Regular",
    fontSize: 15
  },
  button: {
    marginTop: 20,
    width: 120,
    padding: 10,
    fontFamily: "BebasNeue-Regular"
  },
  text: { color: "#6f6f6f", fontFamily: "BebasNeue-Regular" },
  headline: {
    fontFamily: "BebasNeue-Regular",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#fff"
  }
});

export default Home;
