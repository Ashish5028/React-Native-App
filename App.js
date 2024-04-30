import { NativeBaseProvider } from "native-base";
import NavigationScreen from "./src/api/route";
import { store } from "./src/api/store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationScreen />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
