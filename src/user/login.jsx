import {
  Box,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  Button,
  Link,
  Text,
  VStack,
  Image,
  ScrollView,
} from "native-base";
import { useState } from "react";

import loginimg from "../../assets/login.png";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

const LoginUser = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const getData = async () => {
    const values = await AsyncStorage.getItem("useremail");
    console.log("value", values);
  };
  getData();

  const handleButtonClick = () => {
    // dispatch(LoginUser({ email, password }));
    // dispatch(LoginUser());
    navigation.navigate("Home");
  };
  const nevigateSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Center w="100%">
      <ScrollView>
        <Box safeArea width="screen" px="10" height="full">
          <VStack space={5}>
            <Image source={loginimg} alt="loginImage" height={"32"} />
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input type="email" onChangeText={(e) => setEmail(e)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" onChangeText={(e) => setPassword(e)} />
            </FormControl>
            <VStack>
              <Button
                mt="3"
                colorScheme="indigo"
                height="12"
                onPress={handleButtonClick}
              >
                Sign in
              </Button>
              <Button
                className="flex-row justify-end bg-zinc-100 mt-3"
                onPress={nevigateSignUp}
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

export default LoginUser;
