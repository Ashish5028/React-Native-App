import { View, Text } from "react-native";
import React from "react";
import { Button } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const RenderButton = ({
  renderscreen,
  rendercomponentname,
  navigation,
  bgColor = "bg-zinc-100 border-b",
  textColor = "text-black",
  rightArrowIcon,
  logoIcon,
}) => {
  return (
    <View>
      <Button
        className={`${bgColor} border-zinc-400 `}
        onPress={() => navigation.navigate(renderscreen)}
      >
        <View className="flex-row  items-center justify-between w-full">
          <View className="flex-row items-center space-x-3">
            {logoIcon ? logoIcon : null}
            <Text className={`${textColor}`}>{rendercomponentname}</Text>
          </View>
          {rightArrowIcon ? rightArrowIcon : null}
        </View>
      </Button>
    </View>
  );
};

export default RenderButton;
