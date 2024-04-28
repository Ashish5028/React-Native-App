import { Button, Text, View } from "native-base";

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
            // colorScheme="white"
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
      <View className=" flex-row justify-between items-center">
        <ButtonCom
          navigationTitle="Home"
          title="Home"
          titleIcon={<AntDesign name="home" size={30} />}
        />
        <ButtonCom
          navigationTitle="SignIn"
          title="Products"
          titleIcon={<Ionicons name="storefront-outline" size={30} />}
        />
        <ButtonCom
          navigationTitle="SignIn"
          title="Products"
          titleIcon={
            <MaterialCommunityIcons name="account-box-outline" size={30} />
          }
        />
        <ButtonCom
          navigationTitle="Account"
          title="Account"
          titleIcon={<EvilIcons name="user" size={40} color="black" />}
        />
      </View>
    </>
  );
}
