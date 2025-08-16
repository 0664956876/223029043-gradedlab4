import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // USERNAME IS Andani AND PASSWORD IS Mnamateli@123
  const handleLogin = () => {
    if (username.trim().length === 0 || password.trim().length === 0) {
      setMessage(" Please enter both username and password.");
    } else if (username === "Andani" && password === "Mnamateli@123") {
      setMessage("You have successfully logged in!");
    } else {
      setMessage("Invalid credentials. please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome {"\n"}please{"\n"} log in
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />

      {message !== "" && (
        <Text
          style={[
            styles.message,
            message.includes("successful") ? styles.success : styles.error,
          ]}
        >
          {message}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#accde0ff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 8,
    borderColor: "#317a37ff",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#929ea3ff",
  },
  message: {
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
  },
  success: {
    color: "green",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
});
