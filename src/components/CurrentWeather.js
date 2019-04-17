import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text, Card } from "react-native-paper";
import getImage from "../images/getImage";

export default function CurrentWeather(props) {
  function getTime() {
    var d = new Date();
    return d.getHours() + ":" + d.getMinutes();
  }

  return (
    <View style={styles.weather}>
      <View style={styles.image}>
        <Image
          style={{ width: "70%", height: "70%" }}
          resizeMode={"contain"}
          source={getImage(props.data.icon)}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.textDay}>NOW - {getTime()}</Text>
        <Text style={styles.text}>
          Temperature: {Math.round(props.data.temperature)} °C
        </Text>
        <Text style={styles.text}>
          Feels like: {Math.round(props.data.apparentTemperature)} °C
        </Text>
        <Text style={styles.text}>Pressure: {props.data.pressure} hPa</Text>
        <Text style={styles.text}>
          Wind: {Math.round(props.data.windSpeed)} km/h
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weather: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    maxHeight: 150,
    backgroundColor: "#fff",
    borderRadius: 5
  },
  image: {
    width: "45%",
    maxWidth: "45%",
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  info: { width: "55%" },
  text: {
    color: "#6f6f6f",
    fontFamily: "SairaSemiCondensed-Regular",
    fontSize: 15
  },
  textDay: {
    color: "#6f6f6f",
    fontFamily: "BebasNeue-Regular",
    fontSize: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#6f6f6f",
    marginBottom: 10,
    alignSelf: "flex-start"
  }
});
