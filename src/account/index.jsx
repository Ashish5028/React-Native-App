import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import NavigationButton from "./components/navigationButton";
import { Button, HStack, Image, ScrollView, VStack } from "native-base";
import loginimg from "../../assets/login.png";

const AccountScreen = ({ navigation }) => {
  const UseableComp = ({ title1, title2, title1Icon, title2Icon }) => {
    return (
      <>
        <VStack className="flex-row justify-between my-3">
          <HStack className="border border-zinc-400  items-center w-44 py-3 space-x-3 pl-5  rounded-lg">
            {title1Icon}
            <Text>{title1}</Text>
          </HStack>
          <HStack className="border border-zinc-400  items-center w-44 space-x-3 pl-5  rounded-lg">
            {title2Icon}
            <Text>{title2}</Text>
          </HStack>
        </VStack>
      </>
    );
  };
  let user = { name: "Unknow User", email: "" };
  return (
    <>
      <ScrollView>
        <View className="space-y-5">
          <View className="border-b pb-5 border-zinc-400">
            {user && user.email && user.name ? (
              <View className="px-4 space-y-1 py-4 bg-stone-200">
                <Text className="text-lg font-medium">{user.name}</Text>
                <Text>{user.email}</Text>
              </View>
            ) : (
              <View className=" px-3 space-y-2">
                <Image source={loginimg} alt="lognImage" height="24" />
                <Button
                  height="12"
                  className="bg-indigo-600"
                  onPress={() => navigation.navigate("SignIn")}
                >
                  SignIn / SignUp
                </Button>
              </View>
            )}
          </View>
          <View className="border-b border-zinc-400 pb-5 px-3">
            <UseableComp
              title1="My Orders"
              title1Icon={
                <Ionicons name="cube-outline" size={20} color="black" />
              }
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
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={20}
                  color="black"
                />
              }
              title2="Wishlist"
              title2Icon={<FontAwesome6 name="heart" size={20} color="black" />}
            />
          </View>
          <View>
            <NavigationButton navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default AccountScreen;
