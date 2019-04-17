import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
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
import { Location } from "../api";
import { Actions } from "react-native-router-flux";

function Results(props) {
  const [data, setData] = useState(undefined);

  _renderItem = ({ item }) => (
    <Card
      style={styles.card}
      onPress={() =>
        Actions.weather({
          latitude: item.lat,
          longitude: item.lon,
          cityName: item.display_name
        })
      }
    >
      <Card.Content style={styles.content}>
        <Title style={styles.cardTitle}>{getResult(item.display_name)}</Title>
      </Card.Content>
    </Card>
  );

  useEffect(() => {
    if (data === undefined) {
      getData(props.search);
    }
  });

  async function getData(text) {
    const fetchedData = await Location(text);
    if (fetchedData !== undefined) {
      setData(fetchedData);
    }
  }

  function getResult(data) {
    if (data.split(", ")[1] === undefined) {
      return data.split(", ")[0];
    }
    return data.split(", ")[0] + " - " + data.split(", ")[1];
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
      <Headline style={styles.headline}>Pick your location</Headline>
      <FlatList
        data={data}
        keyExtractor={(item, index) => "key" + index}
        style={styles.list}
        renderItem={_renderItem}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  card: { marginBottom: 10, backgroundColor: "#fff" },
  content: { padding: 5, margin: 0 },
  cardTitle: {
    color: "#6f6f6f",
    fontSize: 14,
    padding: 0,
    margin: 0,
    fontFamily: "BebasNeue-Regular"
  },
  list: { width: "100%", marginTop: 10 },
  headline: {
    fontFamily: "BebasNeue-Regular",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#fff"
  }
});

export default Results;
