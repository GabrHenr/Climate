import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import Header from "../../../components/header";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigation();

  const handleButtonPress = () => {
    Alert.alert(
      "Credenciais Digitadas",
      `Usuário: ${user}
      Senha: ${password}`,
    );
    navigate.navigate("Home", { userName: user });
  };
  return (
    <LinearGradient
      colors={["#00b7ff", "#FFFFFF"]}
      style={styles.container}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <Header />
      <View style={styles.content}>
        <Text>Digite seu usuário</Text>
        <TextInput
          style={styles.input}
          onChangeText={(inputText) => {
            setUser(inputText);
          }}
          value={user}
          accessibilityLabel="Campo de usuário"
        />
        <TextInput />
        <Text>Digite sua senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={(inputText) => {
            setPassword(inputText);
          }}
          value={password}
          accessibilityLabel="Campo de senha"
        />
        <StatusBar style="auto" />
        <TouchableOpacity
          style={styles.button}
          onPress={handleButtonPress}
          activeOpacity={0.1}
        >
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 25,
  },
  button: {
    backgroundColor: "inherit",
    borderColor: "grey",
    borderWidth: 1,
    width: "50%",
    alignItems: "center",
    padding: 5,
  },
});
