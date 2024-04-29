import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { VStack, View } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";
import RenderButton from "../common/Button";

export default function NavigationButton({ navigation }) {
  const seller = "Abhishek";

  const NavigateButton = () => {
    return (
      <>
        <VStack space={5} marginTop={5}>
          <RenderButton
            logoIcon={<AntDesign name="user" size={24} color="black" />}
            navigation={navigation}
            rendercomponentname="Personal Information"
            renderscreen="Personal Information"
            rightArrowIcon={<AntDesign name="right" size={24} color="black" />}
          />
          <RenderButton
            logoIcon={
              <SimpleLineIcons name="location-pin" size={24} color="black" />
            }
            navigation={navigation}
            rendercomponentname="Saved Addresses"
            renderscreen="Saved Addresses"
            rightArrowIcon={<AntDesign name="right" size={24} color="black" />}
          />
          <RenderButton
            logoIcon={<Entypo name="new-message" size={20} color="black" />}
            navigation={navigation}
            rendercomponentname="Share App Feedback"
            renderscreen="Saved Addresses"
            rightArrowIcon={<AntDesign name="right" size={24} color="black" />}
          />
          <RenderButton
            logoIcon={<MaterialIcons name="privacy-tip" size={24} />}
            navigation={navigation}
            rendercomponentname="Privacy Policy"
            renderscreen="Privacy/Policy"
            rightArrowIcon={<AntDesign name="right" size={24} color="black" />}
          />
          <RenderButton
            logoIcon={<MaterialIcons name="logout" size={24} color="black" />}
            navigation={navigation}
            rendercomponentname="Logout"
            renderscreen="Saved Addresses"
            rightArrowIcon={<AntDesign name="right" size={24} color="black" />}
          />
          {seller ? (
            <RenderButton
              logoIcon={
                <MaterialIcons
                  name="drive-folder-upload"
                  size={24}
                  color="black"
                />
              }
              navigation={navigation}
              rendercomponentname="Upload Product"
              renderscreen="Upload Product"
              rightArrowIcon={
                <AntDesign name="right" size={24} color="black" />
              }
            />
          ) : null}
        </VStack>
      </>
    );
  };
  return (
    <>
      <View>
        <NavigateButton />
      </View>
    </>
  );
}
