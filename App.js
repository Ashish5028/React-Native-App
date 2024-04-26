import { Text, View } from "react-native";
import HomePage from "./src/home/homePage";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-400 ">
      <HomePage />
      <Text className="text-green-500">
        Open up App.js to start working on your app!
      </Text>
      <Text className="text-blue-500">hello market to your value products</Text>
    </View>
  );
}
