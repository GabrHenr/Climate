import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TemperatureCardInfo = ({ temperature }: { temperature: number }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#00b7ff", "#ffffff"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.weather}>
        <Feather name="sun" size={24} color="#333" />
        <Text style={styles.weatherText}>{temperature}°C</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: "49%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  weather: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  weatherText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
});

export default TemperatureCardInfo;
