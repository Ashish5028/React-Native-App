import { NativeBaseProvider } from "native-base";
import RouteScreen from "./src/api/route";

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <RouteScreen />
      </NativeBaseProvider>
    </>
  );
}
