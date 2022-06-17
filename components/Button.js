import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const Button = ({ onLogin }) => {
  return (
    <View style={styles.buttonBox}>
      <Pressable
        android_ripple={{ color: "#1864ab", radius: 100 }}
        style={styles.button}
        onPress={onLogin}>
        <Text style={{ fontSize: 20, color: "#d0ebff" }}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonBox: {
    textAlign: "left",
    marginTop: 40,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#1971c2",
  },
});
