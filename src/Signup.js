import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Btn from "./Btn";
import { darkGreen } from "./Constant";
import Field from "./Field";

const Signup = (props) => {
  return (
    <View style={{backgroundColor:"black"}}>
      <ScrollView>
        <SafeAreaView style={{ alignItems: "center", width: 400 }}>
          <Text
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Register
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Create a new account
          </Text>
          <View
            style={{
              backgroundColor: "white",
              height: 700,
              width: 400,
              paddingTop: 50,
              borderTopLeftRadius: 130,
              borderBottomRightRadius: 130,
              alignItems: "center",
            }}
          >
            <Field placeholder="First Name" />
            <Field placeholder="Last Name" />
            <Field
              placeholder="Email/Username"
              keyboardType={"email-address"}
            />
            <Field placeholder="Mobile Number" keyboardType={"number"} />
            <Field placeholder="Password" secureTextEntry={true} />
            <Field placeholder="Confirm Password" secureTextEntry={true} />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "78%",
                paddingRight: 15,
              }}
            >
              <Text style={{ color: "grey", fontSize: 15 }}>
                By signing in,you agree to our{""}
              </Text>
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 15 }}
              >
                Terms & Conditions
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:"center",
                width: "78%",
                paddingRight: 15,
                marginBottom:10
              }}
            >
              <Text style={{ color: "grey", fontSize: 15 }}>
                and {""}
              </Text>
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 15 }}
              >
                Privacy Policy
              </Text>
            </View>
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Signup"
              Press={() => {
                alert("Account created");
                props.navigation.navigate("Login");
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Already have an account ?
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Login")}
              >
                <Text
                  style={{ color: darkGreen, fontWeight: "bold", fontSize: 15 }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      </View>
  );
};

export default Signup;
