import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Button, Text, VStack, View } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function NavigationButton({ navigation }) {
  const RepetableButton = ({ screenName, componentName, componentIcon }) => {
    return (
      <>
        <Button
          className="bg-zinc-100 border-b pb-3 border-zinc-400"
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
  const NavigeButton = () => {
    return (
      <>
        <VStack space={7} marginTop={3}>
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
        </VStack>
      </>
    );
  };
  return (
    <>
      <View>
        <NavigeButton />
      </View>
    </>
  );
}
