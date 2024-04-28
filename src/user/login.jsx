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
} from "native-base";
import { useState } from "react";
import RegisterUser from "./register";

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
      <Box safeArea w="90%" maxW="290">
        <VStack space={4} mt="5">
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input type="text" onChangeText={(e) => setLogin(e)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input type="email" onChangeText={(e) => setLogin(e)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={(e) => setLogin(e)} />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
                marginTop: "3",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="1" colorScheme="indigo" onPress={handleUserLogin}>
            Sign in
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginUser;
