import { Background, Button } from "@react-navigation/elements";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#b7e0d3",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  const handleLogin = () => {
    // Implement your login logic here
    alert(`Username: ${username}, Password: ${password}`);
  };
  return (
    <View
      style={styles.container}
    >
      <Text>Climate and Weather App</Text>
      <Text>Type your User</Text>
      <TextInput
        placeholder="Enter your username"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          width: 200,
          height: 40,
          marginTop: 10,
        }}
        value={username}
        onChangeText={(input) => setUsername(input)}
      />
      <Text>Type your Password</Text>
      <TextInput
        placeholder="Enter your password"
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "gray",
          width: 200,
          height: 40,
          marginTop: 10,
        }}
        value={password}
        onChangeText={(input) => setPassword(input)}
      />
      <StatusBar style="auto" />
      <Button id="login-button" onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
}
