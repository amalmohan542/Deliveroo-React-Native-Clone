import React, { useLayoutEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { Image, StatusBar, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const StyledView = styled(View);

  return (
    <SafeAreaView style={styles.container}>
      <Text className="text-red-500 font-extrabold">
        <StyledView className="flex flex-row pb-3 items-center m-5">
          <StyledView>
            <Image
              className="h-7 w-7 p-9 bg-gray-300 rounded-full"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tCyWs0RsWv9NBZEesdrEKAq7refX-HSy1Q&usqp=CAU",
              }}
            />
          </StyledView>
          <StyledView className="ml-7">
            <Text>Deliver now</Text>
            <Text>Deliver now</Text>
          </StyledView>
        </StyledView>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default HomeScreen;
