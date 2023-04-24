
import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Main from './Main';
import { store } from './store/store';
import { Camera } from 'expo-camera';
export default function App() {
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
       await Camera.requestCameraPermissionsAsync();
     
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
