import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import {
  Text,
  Card,
  Title,
  Paragraph,
  Headline,
  Colors,
  ActivityIndicator
} from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { WeatherData } from "../api";
import { CurrentWeather, WeatherPredict } from "../components";

function Weather(props) {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    if (data === undefined) {
      getData(props.latitude, props.longitude);
    }
  });

  async function getData(lat, lon) {
    const fetchedData = await WeatherData(lat, lon);
    if (fetchedData !== undefined) {
      console.log(fetchedData);
      setData(fetchedData);
    }
  }

  if (data === undefined) {
    return (
      <LinearGradient
        colors={["#5ecbed", "#165679"]}
        style={styles.linearGradient}
      >
        <ActivityIndicator animating={true} color={Colors.white} size="large" />
      </LinearGradient>
    );
  }
  return (
    <LinearGradient
      colors={["#5ecbed", "#165679"]}
      style={styles.linearGradient}
    >
      <Headline style={styles.headline}>
        {props.cityName.split(", ")[0]}
      </Headline>
      <CurrentWeather data={data.currently} />
      <WeatherPredict data={data.daily} />
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
    width: "70%",
    padding: 10,
    backgroundColor: "transparent",
    color: "#222",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginTop: 20
  },
  button: {
    marginTop: 20,
    width: 150,
    padding: 10
  },
  headline: {
    fontFamily: "BebasNeue-Regular",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#fff",
    marginBottom: 10
  }
});

export default Weather;
