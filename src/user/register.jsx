import {
  Box,
  Button,
  Center,
  FormControl,
  Image,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import loginimg from "../../assets/login.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterUser = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    const values = await AsyncStorage.getItem("useremail");
    console.log("value", values);
  };
  getData();
  const handleLogin = () => {
    dispatch(RegisterUser({ name, email, password }));
    // dispatch(RegisterUser());
    navigation.navigate("Home");
  };
  useEffect(() => {}, []);

  return (
    <Center w="100%">
      <ScrollView>
        <Box safeArea width="screen" px="10" height="full">
          <Image source={loginimg} alt="loginImage" height={"32"} />
          <VStack space={5}>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                type="text"
                value={name}
                onChangeText={(e) => setName(e)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input
                type="email"
                value={email}
                onChangeText={(e) => setEmail(e)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                value={password}
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
              />
            </FormControl>
            <VStack>
              <Button
                mt="3"
                colorScheme="indigo"
                height="12"
                onPress={handleLogin}
              >
                Sign in
              </Button>
              <Button
                className="flex-row justify-end bg-zinc-100 mt-3"
                onPress={() => navigation.navigate("SignIn")}
              >
                <Text className="text-indigo-600">Go for SignUp</Text>
              </Button>
            </VStack>
          </VStack>
        </Box>
      </ScrollView>
    </Center>
  );
};

export default RegisterUser;
