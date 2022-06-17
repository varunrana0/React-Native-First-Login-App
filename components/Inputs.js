import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import Button from "../components/Button";

const Inputs = ({ addLogin }) => {
  const [enterText, setEnterText] = useState("");
  const [enterPassword, setEnterPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const handleInputText = (enteredText) => {
    setEnterText(enteredText);
  };

  const handleInputPassword = (enteredText) => {
    setEnterPassword(enteredText);
  };

  const handleLogin = () => {
    addLogin(enterText, enterPassword);

    setEnterText("");
    setEnterPassword("");
  };

  return (
    <>
      <TextInput
        keyboardType="email-address"
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={"#fff"}
        value={enterText}
        onChangeText={handleInputText}
      />
      <View style={styles.passwordBox}>
        <TextInput
          secureTextEntry={secure}
          style={[styles.textInput, { flex: 1, borderBottomWidth: 0 }]}
          placeholder="Password"
          value={enterPassword}
          maxLength={15}
          onChangeText={handleInputPassword}
          placeholderTextColor={"#fff"}
        />
        <Text style={styles.showPass} onPress={() => setSecure(!secure)}>
          {secure ? "show" : "hide"}
        </Text>
      </View>
      <View style={{ alignItems: "flex-start" }}>
        <Button onLogin={handleLogin} />
      </View>
    </>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#d0ebff",
    width: "100%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "#d0ebff",
    letterSpacing: 1,
    fontSize: 14,
  },
  passwordBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#d0ebff",
    marginTop: 20,
    paddingRight: 2,
  },
  showPass: {
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 1,
    textAlignVertical: "center",
    height: "100%",
  },
});
