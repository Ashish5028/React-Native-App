// Import necessary components from React Native
import { Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { HStack, ScrollView, VStack } from "native-base";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../user/userSlice";

const HomeComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      {data.map((ele) => {
        return (
          <HStack className=" flex-col  ">
            <HStack
              style={[styles.card, styles.cardElevated]}
              className="px-2 py-2 space-y-1"
            >
              <Image
                source={{ uri: `${ele.image}` }}
                className="h-20 w-20 rounded-md "
              />
              <Text>{ele.category}</Text>
              <View className="flex-row items-center justify-between space-x-2">
                <Text>{ele.rating?.count}</Text>
                <Text>{ele.rating?.rate}</Text>
              </View>
            </HStack>
          </HStack>
        );
      })}
    </ScrollView>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 7,
  },
  cardElevated: {
    backgroundColor: "#F6F5F2",
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
