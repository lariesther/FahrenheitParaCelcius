import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const [fahrenheit, setFahrenheit] = useState(null);
  const [celsius, setCelsius] = useState(null);
  const [texteButton, setTextButton] = useState("Converter");
  const [messageTemp, setMessageTemp] = useState("Preencha a temperatura em Fahrenheit");

  function FahrenheitToCelsius() {
    // Fórmula para conversão de Fahrenheit para Celsius: (Fahrenheit - 32) * 5/9
    setCelsius(((fahrenheit - 32) * 5 / 9).toFixed(2));
  }

  function validateTemperature() {
    if (fahrenheit != null) {
      Keyboard.dismiss();
      FahrenheitToCelsius();
      setFahrenheit(null);
      setTextButton("Converter Novamente");
      setMessageTemp("A temperatura em Celsius é:");
      return;
    }

    setCelsius(null);
    setTextButton("Converter");
    setMessageTemp("Preencha a temperatura em Fahrenheit");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Temperature App</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subTitle}>Conversor de Temperatura</Text>
        <View>
          <Text style={styles.label}>Temperatura (°F)</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFahrenheit(parseFloat(text))}
            value={fahrenheit ?? ''}
            placeholder='Ex. 32'
            keyboardType='numeric' // Corrigido para minúsculas
          />
        </View>
        <TouchableOpacity style={styles.buttom} onPress={() => validateTemperature()}>
          <Ionicons name={"calculator-sharp"} size={24} color='#edf2f4' />
          <Text style={styles.text}>{texteButton}</Text>
        </TouchableOpacity>

        <View style={styles.tempContainer}>
          <Text style={styles.tempText}>{messageTemp}</Text>
          <Text style={styles.tempResult}>{celsius} °C</Text>
        </View>

      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2f4',
  },
  titleBox: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100,
    backgroundColor: '#0080d0',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  titleText: {
    color: '#edf2f4',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#edf2f4',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: '#0080d0',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    color: '#000',
    fontSize: 18,

  },
  input: {
    height: 45,
    width: '100%',
    paddingHorizontal: 10,
    fontSize: 18,
    borderColor: '#0080d0',
    borderBottomWidth: 3,
    marginVertical: 5,


  },
  buttom: {
    height: 55,
    width: "100%",
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0080d0",
    borderRadius: 15,
    marginTop: 40,
    margimBottom: 10,
  },

  text: {
    color: "#edf2f4",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
  },
  tempContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  tempText: {
    fontSize: 18,
    color: "#0080d0",
    fontWeight: "bold",
  },
  tempResult: {
    fontSize: 48,
    color: '#0080d0',
    fontWeight: 'bold',
  },
});

