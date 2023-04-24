import { NavigationContainer } from "@react-navigation/native";
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { setAuth, setUser } from "./store/slices/userSlice";
import { useSelector,useDispatch } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import { useEffect } from "react";
import AllEvents from './screens/AllEvents';
import Scaner from './screens/Scaner';
const Stack = createNativeStackNavigator();
export default function Main() {
    
    const isAuth = useSelector((s) => s.user.isAuth)
    const dispatch = useDispatch()
    const getStorage = async () => {
        let isAuth = await AsyncStorage.getItem('isAuth')

        let user = await AsyncStorage.getItem('user')
        if(JSON.parse(user)) {
            dispatch(setUser(JSON.parse(user)))
          }
          if (JSON.parse(isAuth)) {
              dispatch(setAuth())
          }
    }
   useEffect(() => {
    // getStorage()
   },[])


    if (!isAuth) {


        return(
            <Login/>
        )
    }
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown : false,
                presentation : 'card'
            }}>
                <Stack.Screen name="events" component={AllEvents}/>
                <Stack.Screen name='scaner' component={Scaner} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}