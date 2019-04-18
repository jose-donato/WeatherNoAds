import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Headline, Colors, ActivityIndicator } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { WeatherData } from "../api";
import { CurrentWeather, WeatherPredict } from "../components";

import CustomHeadline from "../components/CustomHeadline"


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
      <CustomHeadline headlineNumber={1} headlineText={props.cityName}/>
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
});

export default Weather;
