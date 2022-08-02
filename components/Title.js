import { View, Text } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Title = ({ children }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          color: colors.gray900,
          fontFamily: "open-sans",
          textAlign: "center",
          borderBottomWidth: 1,
          borderColor: colors.gray500,
          padding: 12,
          //   borderRadius: 300,

          marginHorizontal: 24,
        }}
      >
        {children}
      </Text>
    </View>
  );
};

export default Title;
