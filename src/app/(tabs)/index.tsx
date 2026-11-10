import useTheme from "@/hooks/useTheme";
import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme()
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen123456.</Text>
      <TouchableOpacity onPress={toggleDarkMode}><Text>toggle theme</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
