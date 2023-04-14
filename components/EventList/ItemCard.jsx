import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ItemCard({ itemData }) {
  const navigation = useNavigation();

  const press = () => {
    navigation.navigate("scaner", {
      item: itemData.item,
    });
  };
  return (
    <TouchableOpacity onPress={press} style={s.item}>
      <Image
        style={s.item__image}
        source={require("../../assets/images/banner.png")}
      />
      <View style={s.item__info}>
        <View style={s.item__info__text__container}>
          <Text style={s.item__info__text}>Мероприятие :</Text>
          <Text style={[s.item__info__text,{fontWeight : 500}]}> {itemData.item.name}</Text>
        </View>

        <View style={s.item__info__text__container}>
          <Text style={s.item__info__text}>Адрес : </Text>
          <Text style={[s.item__info__text,{fontWeight : 500}]}> {itemData.item.address}</Text>
        </View>
        <View style={s.item__info__text__container}>
          <Text style={s.item__info__text}>Старт : </Text>
          <Text style={[s.item__info__text,{fontWeight : 500}]}>{itemData.item.start}</Text>
        </View>
        <View style={s.item__info__text__container}>
          <Text style={s.item__info__text}>Всего билетов :</Text>
          <Text style={[s.item__info__text,{fontWeight : 500}]}> {itemData.item.allTikets}</Text>
        </View>
        <View style={s.item__info__text__container}>
          <Text style={s.item__info__text}>Просканировано :</Text>
          <Text style={[s.item__info__text,{fontWeight : 500}]}>{itemData.item.usedTikets}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  item__image: {
    width: 150,
    height: 227,
    resizeMode: "contain",
  },
  item__info: {
    marginLeft: 30,
  },
  item__info__text: {
    color: "white",
    fontSize: 16,
  },
  item__info__text__container : { 
    flexDirection : 'row'
  }
});
