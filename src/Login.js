import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Btn from './Btn'
import { darkGreen } from "./Constant";
import Field from "./Field";
import Background from "./Background";

const Login = (props) => {
  return (
    
    <View style={{ alignItems: "center", width: 400,backgroundColor:"black" }}>
      <Text
        style={{
          color: "white",
          fontSize: 50,
          fontWeight: "bold",
          marginVertical: 10,
        }}
      >
        Login
      </Text>
      <View
        style={{
          backgroundColor: "white",
          height: 700,
          width: 400,
          borderTopLeftRadius: 130,
          borderBottomRightRadius: 130,
          paddingTop: 100,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 40, color: darkGreen, fontWeight: "bold" }}>
          Welcome Back
        </Text>
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Login to your account
        </Text>
        <Field placeholder="Email/Username" keyboardType={"email-address"} />
        <Field placeholder="Password" secureTextEntry={true} />
        <View style={{ alignItems: "flex-end", width: "78%",paddingRight:15,marginBottom:100 }}>
          <Text style={{ color: darkGreen, fontWeight: "bold", fontSize: 15 }}>
            Forgot Password ?
          </Text>
        </View>
        <Btn textColor="white" bgColor={darkGreen} btnLabel="Login" Press={() => alert
        ("Logged In")}/>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
          <Text style={{fontSize:15,fontWeight:"bold"}}>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
          <Text style={{color:darkGreen,fontWeight:"bold",fontSize:15}}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
