import { NativeBaseProvider } from "native-base";
import NavigationScreen from "./src/api/route";

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationScreen />
    </NativeBaseProvider>
  );
};

export default App;
