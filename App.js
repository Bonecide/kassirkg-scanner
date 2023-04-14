
import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Main from './Main';
import { store } from './store/store';
import { BarCodeScanner } from 'expo-barcode-scanner';
export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
     
    };

    getBarCodeScannerPermissions();
  }, []);
  return (
    <Provider store={store}>
      <StatusBar hidden/>
      <Main/>
    </Provider>
  );
}
