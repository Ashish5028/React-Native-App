import { Button, HStack, Text, View } from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
export default function FooterComponent({ navigation }) {
  const ButtonCom = ({ navigationTitle, title, titleIcon }) => {
    return (
      <>
        <View className="flex-col items-center rounded-md">
          <Button
            className="bg-white"
            onPress={() => navigation.navigate(navigationTitle)}
          >
            {titleIcon}
          </Button>
          <Text>{title}</Text>
        </View>
      </>
    );
  };
  return (
    <>
      <HStack className=" flex-row justify-between items-end">
        <ButtonCom
          navigationTitle="Home"
          title="Home"
          titleIcon={<AntDesign name="home" size={25} />}
        />
        <ButtonCom
          navigationTitle="Products"
          title="Products"
          titleIcon={<Ionicons name="storefront-outline" size={25} />}
        />
        <ButtonCom
          navigationTitle="Products"
          title="Products"
          titleIcon={
            <MaterialCommunityIcons name="account-box-outline" size={25} />
          }
        />
        <ButtonCom
          navigationTitle="Account"
          title="Account"
          titleIcon={
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color="black"
            />
          }
        />
      </HStack>
    </>
  );
}
