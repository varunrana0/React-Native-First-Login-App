import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
import React from "react";

const Home = ({ isVisible, name, hideModal }) => {
  return (
    <Modal visible={isVisible} animationType={"fade"}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#decbff",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text style={{ fontSize: 20 }}>Greetings,</Text>
        <Text style={{ fontSize: 35 }}>{name}</Text>

        <Pressable
          android_ripple={{ color: "#decbcc" }}
          onPress={hideModal}
          style={{ marginTop: 30 }}>
          <Text
            style={{
              borderWidth: 1,
              paddingVertical: 10,
              paddingHorizontal: 20,
              fontSize: 20,
              textAlign: "center",
            }}>
            Logout
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default Home;

const styles = StyleSheet.create({});
