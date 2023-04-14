import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import EventList from "../components/EventList/EventList";



export default function AllEvents() {
  return (
    <View style={s.root}>
      <SafeAreaView style={{flex : 1}}>
            <EventList/>
      </SafeAreaView>
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#222222",
    paddingHorizontal : 10
  },
});
