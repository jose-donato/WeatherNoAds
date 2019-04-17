import React, { Component } from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";
import { Text, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/dist/Feather";
import getImage from "../images/getImage";
import views from "../views";

export default function WeatherPredict(props) {
  function getDay(time, index) {
    if (index == 0) {
      return "Yesterday";
    }
    if (index == 1) {
      return "Today";
    }
    if (index == 2) {
      return "Tomorrow";
    }
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var d = new Date(time * 1000);
    return days[d.getDay()];
  }

  function getTime(time) {
    var d = new Date(time * 1000);
    return d.getHours() + ":" + d.getMinutes();
  }

  _renderItem = ({ item, index }) => (
    <View style={styles.weather}>
      <View style={styles.image}>
        <Image
          style={{ width: "70%", height: "70%" }}
          resizeMode={"contain"}
          source={getImage(item.icon)}
        />
        <Text style={styles.textSummary}>{item.summary}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.textDay}>{getDay(item.time, index)}</Text>
        <Text style={styles.text}>
          Highest Temperature: {Math.round(item.temperatureHigh)} °C
        </Text>
        <Text style={styles.text}>
          Lowest Temperature: {Math.round(item.temperatureLow)} °C
        </Text>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Icon name="sunrise" size={20} color="#f5bd34" />
          <Text style={styles.textSun}>{getTime(item.sunriseTime)}</Text>
          <Icon name="sunset" size={20} color="#f5bd34" />
          <Text style={styles.textSun}>{getTime(item.sunsetTime)}</Text>
        </View>
        <Text style={styles.text}>Pressure: {item.pressure} hPa</Text>
        <Text style={styles.text}>Wind: {Math.round(item.windSpeed)} km/h</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={props.data.data}
      keyExtractor={(item, index) => "key" + index}
      style={styles.list}
      renderItem={_renderItem}
    />
  );
}

const styles = StyleSheet.create({
  weather: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  image: {
    width: "50%",
    maxWidth: "50%",
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  info: { width: "50%" },
  text: {
    color: "#6f6f6f",
    fontFamily: "SairaSemiCondensed-Regular",
    fontSize: 14
  },
  textSun: {
    color: "#6f6f6f",
    fontFamily: "SairaSemiCondensed-Regular",
    fontSize: 14,
    marginRight: 5,
    marginLeft: 5
  },
  textSummary: {
    color: "#6f6f6f",
    fontFamily: "SairaSemiCondensed-Regular",
    fontSize: 13,
    marginTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    textAlign: "center"
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
  },
  list: {
    flex: 1,
    width: "100%",
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 5
  }
});
