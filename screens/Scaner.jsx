import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ScanerComponent from "../components/ScanerComponent/ScanerComponent";

export default function Scaner({ route }) {
  const params = route.params;

  return (
    <View style={s.root}>
      <SafeAreaView style={s.container}>
        
        <Text style={s.title}>Отсканируйте код</Text>
        <ScanerComponent item={params.item} />
      </SafeAreaView>
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#222222",
    paddingHorizontal: 10,
  },
  container: {
    alignItems: "center",
  },
  title: {
    color: "#F8C91A",
    fontWeight : 700,
    marginTop : 30,
    fontSize: 24,
  },
  image: {
    width: 280,
    height: 100,
    alignSelf: "center",
  },
});
