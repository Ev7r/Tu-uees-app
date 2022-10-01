import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View>
      <Text>Email:{auth.currentUser?.email}</Text>

      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen

const styles = StyleSheet.create({});
