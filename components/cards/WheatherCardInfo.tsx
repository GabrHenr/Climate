import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const states = [
  { uf: "AC", name: "Acre" },
  { uf: "AL", name: "Alagoas" },
  { uf: "AP", name: "Amapa" },
  { uf: "AM", name: "Amazonas" },
  { uf: "BA", name: "Bahia" },
  { uf: "CE", name: "Ceara" },
  { uf: "DF", name: "Distrito Federal" },
  { uf: "ES", name: "Espirito Santo" },
  { uf: "GO", name: "Goias" },
  { uf: "MA", name: "Maranhao" },
  { uf: "MT", name: "Mato Grosso" },
  { uf: "MS", name: "Mato Grosso do Sul" },
  { uf: "MG", name: "Minas Gerais" },
  { uf: "PA", name: "Para" },
  { uf: "PB", name: "Paraiba" },
  { uf: "PR", name: "Parana" },
  { uf: "PE", name: "Pernambuco" },
  { uf: "PI", name: "Piaui" },
  { uf: "RJ", name: "Rio de Janeiro" },
  { uf: "RN", name: "Rio Grande do Norte" },
  { uf: "RS", name: "Rio Grande do Sul" },
  { uf: "RO", name: "Rondônia" },
  { uf: "RR", name: "Roraima" },
  { uf: "SC", name: "Santa Catarina" },
  { uf: "SP", name: "Sao Paulo" },
  { uf: "SE", name: "Sergipe" },
  { uf: "TO", name: "Tocantins" },
];

const WheatherCardInfo = ({
  userName,
  temperature,
  selectedState,
  onStateChange,
}: {
  userName: string;
  temperature: number;
  selectedState: string;
  onStateChange: (state: string) => void;
}) => {
  const actualDate = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
  return (
    <LinearGradient
      style={styles.container}
      colors={["#00b7ff", "#ffffff"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.header}>
        <Text style={styles.paragraph}>Olá, {userName}!</Text>
        <Text style={styles.paragraph}>{actualDate}</Text>
      </View>
      <View>
        <Text>Selecione o Estado:</Text>
        <Picker
          selectedValue={selectedState}
          onValueChange={(itemValue, itemIndex) => onStateChange(itemValue)}
          itemStyle={{ backgroundColor: "inherit" }}
        >
          {states.map((state, index) => (
            <Picker.Item
              key={index}
              label={state.name}
              value={state.name}
              color="#000"
            />
          ))}
        </Picker>
      </View>
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
    width: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
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
  picker: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "inherit",
  },
  pickerText: {
    color: "#fff",
  },
  item: {
    fontSize: 16,
    color: "#fff",
    padding: 0,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default WheatherCardInfo;
