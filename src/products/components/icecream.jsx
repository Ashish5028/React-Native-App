import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "native-base";
import axios from "axios";

const Icecream = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const result = async () => {
      const response = await fetch("");
      const data = await response.json();
      console.log(data);
    };
    return result;
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>Icecream</Text>
      {/* <Button onPress={() => setData(data + 1)}>Increase by 1</Button> */}
      <Text>dlk</Text>
      <Text>{data?.title}</Text>
    </View>
  );
};

export default Icecream;
