import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../home/main";
import { View } from "native-base";
import LoginUser from "../user/login";
import CartItems from "../home/components/cartItems";
import RegisterUser from "../user/register";
import AccountScreen from "../account";
import PersonalInfoComponent from "../account/components/personalInfo";
import SavedAddressComponent from "../account/components/saveAddresses";

const Stack = createNativeStackNavigator();

const RouteScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="SignIn" component={LoginUser} />
        <Stack.Screen name="SignUp" component={RegisterUser} />
        <Stack.Screen name="cart" component={CartItems} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen
          name="Personal Information"
          component={PersonalInfoComponent}
        />
        <Stack.Screen
          name="Saved Addresses"
          component={SavedAddressComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteScreen;

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <MainScreen navigation={navigation} />
    </View>
  );
}
