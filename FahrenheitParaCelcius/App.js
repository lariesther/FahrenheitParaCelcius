import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity, Keyboard } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"
export default function App() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [Fc, setFc ] = useState(null);
  const [texteButton, setTextButton] = useState("Calcular");
  const [messageFc, setMessageFc] = useState("coloque os graus em Fahrenheit")
  
  function FahrenheitCalculator() {*
    // (Celsius /(fahrenheit - dado)))°F − 32) × 5/9 
    setFc((weight / (height * height)).toFixed(2));
  }
  function validateFc() {
    if (weight != null && height != null) {
      Keyboard.dismiss();
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setTextButton("Calcular Novamente");
      setMessageFc("Seu IMC é igual a:");
      return;
    }

    setFc(null);
    setTextButton("Calcular");
    setMessageFc("preencha peso e altura");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Silvinha Health App</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subTitle}>calculadora de IMC</Text>
        <View>
          <Text style={styles.label}>Altura</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height ?? ''}
            placeholder='Ex. 1.70'
            KeyboardType='numeric'
          />
        </View>
        <View style={{ Margintop: 25 }}>
          <Text style={styles.label}>Peso</Text>
          <TextInput
            style={styles.input}
            onChange={setWeight}
            value={weight ?? ''}
            placeholder='Ex. 80.00'
            KeyboardType='numeric'
          />

        </View>
        <TouchableOpacity style={styles.buttom}
          onPress={() => validateImc()}
        >

          <Ionicons name={"calculator-sharp"} size={24} color='#edf2f4' />
          <Text style={styles.text}>{texteButton}</Text>
        </TouchableOpacity>

        <View style={styles.imcConteiner}>
          <Text style={styles.imcText}>{messageImc}</Text>
          <Text style={styles.imcResult}>{imc}</Text>
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
  titleText:
  {
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
    marginLeft: 5

  },
  imcConteiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  imcText: {
    fontSize: 18,
    color: "#0080d0",
    fontWeight: "bold"
  },

  imcResult: {
    fontSize: 48,
    color: '#0080d0',
    fontWeight: 'bold'
  }

});

