import {TextInput } from "react-native";
import React from "react";
import { darkGreen } from "./Constant";

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 10,
        color: darkGreen,
        paddingHorizontal: 10,
        width: "80%",
        height:50,
        backgroundColor: "rgb(220,220,220)",
        marginVertical: 10,
      }}
      placeholderTextColor={darkGreen}
    ></TextInput>
  );
};

export default Field;
