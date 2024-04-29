import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../home/main";
import { VStack, View, useLayout } from "native-base";
import LoginUser from "../user/login";
import CartItems from "../home/components/cartItems";
import RegisterUser from "../user/register";
import AccountScreen from "../account";
import PersonalInfoComponent from "../account/components/personalInfo";
import SavedAddressComponent from "../account/components/saveAddresses";
import ProductComponent from "../products";
import CakeComponent from "../products/components/cake";
import PastryComponent from "../products/components/pastry";
import IceCreameComponent from "../products/components/icecream";
import ChocolateComponent from "../products/components/chocolate";
import UploadProduct from "../uploadProducts";
import UploadCake from "../uploadProducts/components/uploadCake";
import UploadPastry from "../uploadProducts/components/uploadPastry";
import UploadIcecream from "../uploadProducts/components/uploadIcecream";
import UploadChocolate from "../uploadProducts/components/uploadChocolate";
import PrivacyPolicy from "../account/components/privacyPolicy";

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="SignIn" component={LoginUser} />
        <Stack.Screen name="SignUp" component={RegisterUser} />
        <Stack.Screen name="cart" component={CartItems} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Products" component={ProductComponent} />
        <Stack.Screen name="Cakes" component={CakeComponent} />
        <Stack.Screen name="Pastries" component={PastryComponent} />
        <Stack.Screen name="Icecreams" component={IceCreameComponent} />
        <Stack.Screen name="Chocolates" component={ChocolateComponent} />
        <Stack.Screen name="Upload Product" component={UploadProduct} />
        <Stack.Screen name="Upload Cake" component={UploadCake} />
        <Stack.Screen name="Upload Pastry" component={UploadPastry} />
        <Stack.Screen name="Upload Icecream" component={UploadIcecream} />
        <Stack.Screen name="Upload Chocolate" component={UploadChocolate} />
        <Stack.Screen name="Privacy/Policy" component={PrivacyPolicy} />
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

export default NavigationScreen;

function HomeScreen({ navigation }) {
  return (
    <VStack style={{ flex: 1 }}>
      <MainScreen navigation={navigation} />
    </VStack>
  );
}
