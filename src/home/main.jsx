import React, { useLayoutEffect } from "react";
import { NativeBaseProvider, Text, VStack, View } from "native-base";
import HeaderComponnet from "./components/header";
import FooterComponent from "./components/footer";
import { useNavigation } from "@react-navigation/native";

const MainScreen = ({ navigation }) => {
  const navigater = useNavigation();
  useLayoutEffect(() => {
    navigater.setOptions({
      headerShown: false,
    });
  });
  return (
    <NativeBaseProvider>
      <VStack
        h="full"
        paddingBottom="10px"
        paddingTop={4}
        marginTop={2}
        bg="white"
      >
        <HeaderComponnet navigation={navigation} />
        <View className="px-4">
          <FooterComponent navigation={navigation} />
        </View>
      </VStack>
    </NativeBaseProvider>
  );
};

export default MainScreen;
