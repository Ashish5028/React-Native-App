import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Image,
  Input,
  Link,
  Radio,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import loginimg from "../../assets/login.png";
import { useRef } from "react";
import { Platform } from "react-native";

const RegisterUser = ({ navigation }) => {
  const myRef = useRef({});
  return (
    <Center w="100%">
      <ScrollView>
        <Box safeArea width="screen" px="10" height="full">
          <Image source={loginimg} alt="loginImage" height={"32"} />
          <VStack space={5}>
            <Radio.Group onChange={(value) => {}}>
              <HStack className="flex-row justify-between w-full px-1">
                <Radio colorScheme="success" value="1" my={1}>
                  Seller
                </Radio>
                <Radio colorScheme="success" ref={myRef} value="2" my={1}>
                  User
                </Radio>
              </HStack>
            </Radio.Group>

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
            </FormControl>
            <Button
              mt="3"
              colorScheme="indigo"
              height="12"
              onPress={(e) => handleUserLogin(e)}
            >
              Sign in
            </Button>
          </VStack>
        </Box>
      </ScrollView>
    </Center>
  );
};

export default RegisterUser;
