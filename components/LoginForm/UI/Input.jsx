import { StyleSheet } from "react-native";
import { TextInput } from "react-native";

export default function Input({
  setValue,
  placeholder,
  style,
  error,
  required,
  register,
  name,
  ...props
}) {
  return (
    <TextInput
      placeholderTextColor={
        error ? "red" : "black" 
      }
      placeholder={placeholder}
      style={[s(error).input, style]}
      onChangeText={(text) => setValue(name, text)}
      ref={register(name, { required: !!required })}
      {...props}
    />
  );
}


const s = (error) => StyleSheet.create({
    input: {
        width: "90%",
        height: 60,
        backgroundColor: "#FFCC01",
        paddingLeft: 60,
        color : error ? 'red' : 'black',
        borderColor : "#706E6E",
        borderWidth : 1
      }
})