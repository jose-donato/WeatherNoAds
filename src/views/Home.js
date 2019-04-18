import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { Button, Headline, Card, Title } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import CustomButton from '../components/CustomButton'
import CustomHeadline from '../components/CustomHeadline'

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

          <CustomHeadline headlineNumber={2} headlineText={"Your last location"} />
        
          <CustomButton searchFunc={() => Actions.weather(props.lastSearch)} searchText={props.lastSearch.cityName}/>
        
        </View>
      );
    }
  }

  return (
    <LinearGradient
      colors={["#5ecbed", "#165679"]}
      style={styles.linearGradient}
    >
      <CustomHeadline headlineNumber={1} headlineText={"Weather without ads"} />
      
      <TextInput
        value={text}
        onChangeText={text => setText(text)}
        textAlign={"center"}
        placeholder="Enter your location"
        placeholderTextColor="#eae8e5"
        style={styles.input}
      />

      <CustomButton searchFunc={search} searchText={"Search"}/>
      
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

  buttonLast: {
    marginTop: 20,
    padding: 10,
    fontFamily: "BebasNeue-Regular"
  },

  text: { color: "#6f6f6f", fontFamily: "BebasNeue-Regular" },
});

function mapStateToProps(state) {
  return {
    lastSearch: state.lastSearch
  };
}

export default connect(mapStateToProps)(Home);
