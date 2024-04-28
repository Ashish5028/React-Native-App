import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FontAwesome6 } from "@expo/vector-icons";

import NavigationButton from "./components/navigationButton";

const AccountScreen = () => {
  const UseableComp = ({ title1, title2, title1Icon, title2Icon }) => {
    return (
      <>
        <View className="flex-row justify-between my-4">
          <View className="border border-zinc-400 flex-row items-center w-44 py-3 space-x-3 pl-5  rounded-lg">
            {title1Icon}
            <Text>{title1}</Text>
          </View>
          <View className="border border-zinc-400 flex-row items-center w-44 space-x-3 pl-5  rounded-lg">
            {title2Icon}
            <Text>{title2}</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View className="space-y-5">
      <View className="px-4 space-y-1 py-4 bg-stone-200">
        <Text className="text-lg font-medium">User Decon Name</Text>
        <Text>decondellon@gmail.com</Text>
      </View>
      <View className="border-b-4 border-zinc-300 pb-5 px-3">
        <UseableComp
          title1="My Orders"
          title1Icon={<Ionicons name="cube-outline" size={20} color="black" />}
          title2="Remainders"
          title2Icon={
            <MaterialCommunityIcons
              name="bell-ring-outline"
              size={24}
              color="black"
            />
          }
        />
        <UseableComp
          title1="Chat with Us"
          title1Icon={
            <Ionicons name="chatbox-ellipses-outline" size={20} color="black" />
          }
          title2="Wishlist"
          title2Icon={<FontAwesome6 name="heart" size={20} color="black" />}
        />
      </View>
      <View>
        <NavigationButton />
      </View>
    </View>
  );
};

export default AccountScreen;
