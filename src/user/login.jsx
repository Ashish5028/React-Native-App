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
import RegisterUser from "./register";
import loginimg from "../../assets/login.png";

const LoginUser = ({ navigation }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleUserLogin = async () => {
    const result = await fetch("http://localhost:3001/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login }),
    });
    console.log("response", result);
    // if (result.ok) {
    //   let data = await result.json();
    //   let auth = data.auth;
    //   let name = data.data.name;
    //   let category = data.data.category;
    //   localStorage.setItem("auth", auth);
    //   localStorage.setItem("User", name);
    //   localStorage.setItem("Category", category);
    // }
  };
  // console.log("email", login);
  return (
    <Center w="100%">
      <ScrollView>
        <Box safeArea width="screen" px="10" height="full">
          <VStack space={5}>
            <FormControl>
              <Image source={loginimg} alt="loginImage" height={"32"} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input type="email" onChangeText={(e) => setLogin(e)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" onChangeText={(e) => setLogin(e)} />
            </FormControl>
            <VStack>
              <Button
                mt="3"
                colorScheme="indigo"
                height="12"
                onPress={handleUserLogin}
              >
                Sign in
              </Button>
              <Button
                className="flex-row justify-end bg-zinc-100 mt-3"
                onPress={() => navigation.navigate("SignUp")}
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
