import React from "react";
import { HStack, VStack, View } from "native-base";
import RenderButton from "../common/Button";
import HomeComponent from "../home/components/home";

const ProductComponent = ({ navigation }) => {
  return (
    <VStack space={4} padding={5}>
      <View className="flex-row justify-between">
        <RenderButton
          rendercomponentname="Cakes"
          renderscreen="Cakes"
          navigation={navigation}
          bgColor="w-36 h-12 bg-zinc-100 border "
        />
        <RenderButton
          rendercomponentname="Pastries"
          renderscreen="Pastries"
          navigation={navigation}
          bgColor="w-36 h-12 bg-zinc-100 border"
        />
      </View>
      <View className="flex-row justify-between">
        <RenderButton
          rendercomponentname="Icecreams"
          renderscreen="Icecreams"
          navigation={navigation}
          bgColor="w-36 h-12 bg-zinc-100 border"
        />
        <RenderButton
          rendercomponentname="Chocolates"
          renderscreen="Chocolates"
          navigation={navigation}
          bgColor="w-36 h-12 bg-zinc-100 border"
        />
      </View>
      <HomeComponent />
    </VStack>
  );
};

export default ProductComponent;
