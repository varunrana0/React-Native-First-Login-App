import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "./assets/logo/logo-removebg-preview.png";
import Home from "./components/Home";
import Inputs from "./components/Inputs";

export default function App() {
  const [modelVisible, setModelVisible] = useState(false);

  const email = "varun@gmail.com";
  const pass = "ab12";

  const handleLogin = (enterText, enterPassword) => {
    if (!enterText.length || !enterPassword.length) {
      alert("fill all fields...");
      return;
    } else if (!enterText.includes("@gmail.com")) {
      alert("email must include @gmail.com.");
      return;
    } else if (
      enterText.toString() !== email ||
      enterPassword.toString() !== pass
    ) {
      alert("wrong credentials");
      return;
    } else {
      setModelVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.nativeBox]}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.infoText}>enter your info. to get login</Text>
      </View>

      {/* form */}
      <View style={styles.form}>
        <View style={styles.box}>
          {/* email */}
          <Inputs addLogin={handleLogin} />
        </View>
      </View>

      <Home
        isVisible={modelVisible}
        name={email}
        hideModal={() => setModelVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#1864ab",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    fontSize: 20,
    textTransform: "capitalize",
    letterSpacing: 1,
    color: "#d0ebff",
    fontWeight: "bold",
  },
  box: { width: "100%", paddingHorizontal: 5 },
  nativeBox: {
    height: 250,
    width: 250,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  logo: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  form: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    marginTop: 30,
  },
});
