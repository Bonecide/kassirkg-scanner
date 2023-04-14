import { StyleSheet } from "react-native";
import { FlatList, Image, Text } from "react-native";
import ItemCard from "./ItemCard";
const fakeEvents = [
  {
    id: 1,
    name: "ЛСП",
    allTikets: 1000,
    usedTikets: 500,
    address: "Бар Сью зи Вон",
    start: "23:00",
  },
  {
    id: 2,
    name: "ЛСП",
    allTikets: 1000,
    usedTikets: 500,
    address: "Бар Сью зи Вон",
    start: "23:00",
  },
  {
    id: 3,
    name: "ЛСП",
    allTikets: 1000,
    usedTikets: 500,
    address: "Бар Сью зи Вон",
    start: "23:00",
  },
];

const renderItem = (itemData) => {
  return <ItemCard itemData={itemData} />;
};
export default function EventList() {
  return (
    <>
      <Image style={s.image} source={require('../../assets/images/Logo.png')}/>
      <Text style={s.title}>Все мероприятия</Text>
      <FlatList
        style={{ flex: 1 }}
        renderItem={renderItem}
        data={fakeEvents}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
const s = StyleSheet.create({
  image: {
    width: 280,
    height: 100,
    alignSelf: "center",
    marginBottom : 40,
  },
  title : {
    marginBottom : 40,
    fontSize : 24,
    color : '#F8C91A',
    fontWeight : 700,
    alignSelf : 'center',
  }
})