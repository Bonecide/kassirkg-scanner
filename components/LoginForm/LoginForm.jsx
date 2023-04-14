import { useForm } from "react-hook-form";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { View } from "react-native";
import CommonButton from "../UI/Buttons/CommonButton";
import Input from "./UI/Input";
import { useDispatch } from "react-redux";
import { setAuth, setUser } from "../../store/slices/userSlice";
export default function LoginForm() {

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    // dispatch(setUser(data.login))
    dispatch(setAuth())
  };
  return (
    <ScrollView style={s.root}>
      <KeyboardAvoidingView behavior="position">
        <Image
          style={s.image}
          source={require("../../assets/images/Logo.png")}
        />

        <View style={s.inputContainer}>
          <View>
            <Input
              setValue={setValue}
              name="login"
              register={register}
              required
              error={errors.login}
              placeholder="Логин"
              style={{ borderTopRightRadius: 30, position: "relative" }}
            />
            <Image
              style={s.icon}
              source={require("../../assets/icons/person.png")}
            />
          </View>
          <View>
            <Input
              setValue={setValue}
              name="password"
              register={register}
              required
              error={errors.password}
              placeholder="Пароль"
              secureTextEntry={true}
              style={{
                borderBottomRightRadius: 30,
                position: "relative",
                borderTopWidth: 0,
              }}
            />
            <Image
              style={s.icon}
              source={require("../../assets/icons/key.png")}
            />
          </View>
        </View>
        <CommonButton onPress={handleSubmit(onSubmit)} style={s.button}>
          Войти
        </CommonButton>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#222222",
  },
  image: {
    width: 280,
    height: 167,
    marginTop: 150,
    alignSelf: "center",
  },
  inputContainer: {
    width: "100%",
    marginTop: 100,
    marginBottom: 30,
  },

  button: {
    alignSelf: "center",
  },
  icon: {
    position: "absolute",
    top: 22,
    left: 20,
  },
});
