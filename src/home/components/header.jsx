import {
  Box,
  Button,
  HStack,
  NativeBaseProvider,
  Text,
  VStack,
  View,
} from "native-base";

import { AntDesign } from "@expo/vector-icons";
import HomeComponent from "./home";
import SimpleSlider from "../../products/components/chocolate";
import { useState } from "react";
export default function HeaderComponnet({ navigation }) {
  const [cart, setCart] = useState(0);
  const onChangeHandle = () => {
    navigation.navigate("cart");
    setCart(cart + 1);
  };
  return (
    <>
      <NativeBaseProvider>
        <HStack
          style={{
            justifyContent: "flex-end",
          }}
        >
          <View className="flex-col">
            <Button colorScheme="white" onPress={onChangeHandle}>
              <Text className="relative left-6 text-sm ">{cart}</Text>
              <AntDesign
                name="shoppingcart"
                size={30}
                color="black"
                className="absolute"
              />
            </Button>
          </View>
        </HStack>
        <HomeComponent />
        <SimpleSlider />
      </NativeBaseProvider>
    </>
  );
}
