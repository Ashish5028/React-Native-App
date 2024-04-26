import React from "react";

import { NativeBaseProvider } from "native-base";
import RouteScreen from "./src/api/route";

const App = () => {
  return (
    <NativeBaseProvider>
      <RouteScreen />
    </NativeBaseProvider>
  );
};

export default App;
