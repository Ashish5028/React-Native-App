import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";

const AccountScreen = ({ navigation }) => {
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

  const RepetableButton = ({ screenName, componentName, componentIcon }) => {
    return (
      <>
        <Button
          className="bg-zinc-100 border-b pb-4 border-zinc-400"
          onPress={() => navigation.navigate(screenName)}
        >
          <View className="flex-row  items-center justify-between w-full">
            <View className="flex-row items-center space-x-3">
              {componentIcon}
              <Text>{componentName}</Text>
            </View>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </Button>
      </>
    );
  };
  const NavigationButton = () => {
    return (
      <>
        <View className=" py-1 justify-between h-96">
          <RepetableButton
            componentName="Personal Information"
            screenName="Personal Information"
            componentIcon={<AntDesign name="user" size={24} color="black" />}
          />
          <RepetableButton
            componentName="Saved Addresses"
            screenName="Saved Addresses"
            componentIcon={
              <SimpleLineIcons name="location-pin" size={24} color="black" />
            }
          />
          <RepetableButton
            componentName="Share App Feedback"
            screenName="Saved Addresses"
            componentIcon={
              <Entypo name="new-message" size={20} color="black" />
            }
          />
          <RepetableButton
            componentName="Privacy Policy"
            screenName="Saved Addresses"
            componentIcon={<MaterialIcons name="privacy-tip" size={24} />}
          />
          <RepetableButton
            componentName="Logout"
            screenName="Saved Addresses"
            componentIcon={
              <MaterialIcons name="logout" size={24} color="black" />
            }
          />
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
