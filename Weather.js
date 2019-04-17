import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

export default Weather;

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more into look outside",
    icon: "ios-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny as crazy",
    subtitle: "Go get your ass burnt",
    icon: "ios-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    icon: "ios-thunderstorm"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know, fucking boring",
    icon: "ios-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no.",
    icon: "ios-snow"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay",
    icon: "ios-rainy-outline"
  },
  Mist: {
    colors: ["#ddd6f3", "#faaca8"],
    title: "Mist",
    subtitle: "Atmosphere",
    icon: "ios-more"
  },
  Smoke: {
    colors: ["#ddd6f3", "#faaca8"],
    title: "Smoke",
    subtitle: "Atmosphere",
    icon: "ios-more"
  },
  Haze: {
    colors: ["#ddd6f3", "#faaca8"],
    title: "Haze",
    subtitle: "Atmosphere",
    icon: "ios-more"
  },
  Dust: {
    colors: ["#ddd6f3", "#faaca8"],
    title: "Dust",
    subtitle: "Atmosphere",
    icon: "ios-more"
  },
  Fog: {
    colors: ["#ddd6f3", "#faaca8"],
    title: "Fog",
    subtitle: "Atmosphere",
    icon: "ios-more"
  },
  Sand: {
    colors: ["#ddd6f3", "#faaca8"],
    title: "Sand",
    subtitle: "Atmosphere",
    icon: "ios-more"
  },
  Ash: {
    colors: ["#ddd6f3", "#faaca8"],
    title: "Ash",
    subtitle: "Atmosphere",
    icon: "ios-more"
  },
  Squall: {
    colors: ["#ddd6f3", "#faaca8"],
    title: "Squall",
    subtitle: "Atmosphere",
    icon: "ios-morey"
  },
  Tornado: {
    colors: ["#ddd6f3", "#faaca8"],
    title: "Tornado",
    subtitle: "Atmosphere",
    icon: "ios-more"
  }
};

function Weather({ weatherName, temp }) {
  console.log(weatherName);
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <Ionicons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white"
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 18,
    fontWeight: "400"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
