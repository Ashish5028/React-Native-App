import { View, Text } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Button, HStack, Image, ScrollView, VStack } from "native-base";
import loginimg from "../../assets/login.png";
import RenderButton from "../common/Button";
import NavigationButton from "../api/navigateComponents";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AccountScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  let user = { name: name, email: email };
  const getData = async () => {
    const name = await AsyncStorage.getItem("username");
    const email = await AsyncStorage.getItem("useremail");
    setName(name);
    setEmail(email);
  };
  getData();
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

  return (
    <>
      <ScrollView>
        <View className="space-y-5">
          <View className="border-b pb-5 border-zinc-400 mt-3">
            {user && user.email && user.name ? (
              <View className="px-4 space-y-1 py-4 bg-stone-200">
                <Text className="text-lg font-medium">{user.name}</Text>
                <Text>{user.email}</Text>
              </View>
            ) : (
              <View className=" py-2 px-3 space-y-2">
                <Image
                  source={loginimg}
                  alt="lognImage"
                  height="24"
                  marginBottom={4}
                />
                <RenderButton
                  navigation={navigation}
                  rendercomponentname="SignIn / SignUp"
                  renderscreen="SignIn"
                  bgColor="bg-indigo-600 h-11"
                  textColor="text-white"
                />
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
