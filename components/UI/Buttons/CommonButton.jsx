import { StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "react-native";


export default function CommonButton({children,onPress,style}) {

    return(
        <TouchableOpacity style={[s.container,style]} onPress={onPress}>
            <Text style={s.text}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const s = StyleSheet.create({

    container : {
        width : 160,
        height : 50,
        alignItems : 'center',
        justifyContent : "center",
        backgroundColor : '#FFCC01',
        borderRadius : 20,
    },
    text : {
        fontSize : 16,
        fontWeight : 500,
       
    }
})