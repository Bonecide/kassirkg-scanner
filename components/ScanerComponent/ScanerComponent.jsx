import { useEffect, useState } from "react";
import { Animated, Dimensions, Text, Vibration, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet } from "react-native";

export default function ScanerComponent({ item }) {
  const [hasPermission, setHasPermission] = useState();
  const [isScanned, setIsScanned] = useState(false);
  const animatedValue = new Animated.Value(0.3);
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  if (!hasPermission) {
    return <Text>Нет доступа к камере</Text>;
  }
  const handleBarCodeScanned = ({ type, data }) => {
    if (!isScanned) {
      setIsScanned(true);
      alert(data);
      Vibration.vibrate(500);
    }
  };
  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 0.5,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  };
  startAnimation();
  return (
    <View>
      
      <View style={s.aboutEventContainer}>
        <Text style={s.text}>Мероприятие : </Text>
        <Text style={s.text}>{item.name}</Text>
      </View>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        type={BarCodeScanner.Constants.Type.back}
        style={s.scaner}
      >
        <Animated.Image
          source={require("../../assets/images/QRScan.png")}
          style={s.scanerImage}
        />
      </BarCodeScanner>
    </View>
  );
}
const width = Dimensions.get('window').width
const s = StyleSheet.create({
  aboutEventContainer: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 40,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  scaner: {
    width: width,
    height: width,
    overflow: "hidden",
  },
  scanerImage: {
    position: "absolute",
    left: "25%",
    top: "20%",
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.6,
  },
  image: {
    width: 280,
    height: 100,
    alignSelf: "center",
    marginBottom : 40,
  },
});
