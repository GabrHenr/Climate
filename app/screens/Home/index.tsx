import getWeather from "@/api/getWeather";
import TemperatureCardInfo from "@/components/cards/TemperatureCardInfo";
import WheatherCardInfo from "@/components/cards/WheatherCardInfo";
import { use, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = ({ route }: { route: { params: { userName: string } } }) => {
  const [currentTemperature, setCurrentTemperature] = useState(30);
  const [temperatureMin, setTemperatureMin] = useState(28);
  const [temperatureMax, setTemperatureMax] = useState(32);
  const [feels_like, setFeels_like] = useState(31);
  const [selectedState, setSelectedState] = useState("Rio de Janeiro");
  const [currentHumidity, setCurrentHumidity] = useState(0);
  const [currentWindSpeed, setCurrentWindSpeed] = useState(0);
  const [currentPressure, setCurrentPressure] = useState(0);
  const handleStateChange = (state: string) => {
    setSelectedState(state);
  };
  function kelvinToCelsius(kelvin: number) {
    return Math.round(kelvin - 273.15);
  }
  useEffect(() => {
    fetchWeather();
  }, []);
  useEffect(() => {
    fetchWeather();
  }, [selectedState]);
  const { userName } = route.params;
  async function fetchWeather() {
    try {
      const data = await getWeather(selectedState);
      if (data) {
        setCurrentTemperature(data.weather.currentTemperature);
        setTemperatureMax(data.weather.temperatureMax);
        setTemperatureMin(data.weather.temperatureMin);
        setFeels_like(data.weather.feels_like);
        setCurrentHumidity(data.weather.currentHumidity);
        setCurrentWindSpeed(data.weather.currentWindSpeed);
        setCurrentPressure(data.weather.currentPressure);
      }
    } catch (error) {
      console.error("Erro ao obter os dados meteorológicos:", error);
    }
  }
  return (
    <View style={styles.homeContainer}>
      <WheatherCardInfo
        temperature={currentTemperature}
        userName={userName}
        selectedState={selectedState}
        onStateChange={handleStateChange}
      />

      <View style={styles.otherTemperatures}>
        <TemperatureCardInfo temperature={temperatureMax} />

        <TemperatureCardInfo temperature={temperatureMin} />

      </View>
      <View style={styles.infoField}>
        <Text style={styles.infoText}>Detalhes do Clima</Text>
        <View style={styles.detailsContent}>
          <View style={styles.details}>
            <Text style={styles.descriptionTitle}>Umidade</Text>
            <Text>{currentHumidity}%</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.descriptionTitle}>Vento</Text>
            <Text>{currentWindSpeed} km/h</Text> 
          </View>
        </View>
        <View style={styles.detailsContent}>
          <View style={styles.details}>
            <Text style={styles.descriptionTitle}>Pressão Atmosférica</Text>
            <Text>{currentPressure} hPa</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.descriptionTitle}>Sensação Térmica</Text>
            <Text>{feels_like}°C</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  otherTemperatures: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  infoField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  detailsContent: {
    display: "flex",
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#87CEEB",
  },
  details: {
    width: "50%",
    padding: 5,
  },
  descriptionTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
export default Home;
