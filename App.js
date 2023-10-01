import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import DATA from "./data/DATA";
import Row from "./components/Row";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Row person={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
