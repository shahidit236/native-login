import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import Background from './Background'
import { darkGreen, green } from './Constant'
import Btn from './Btn'

const Home = (props) => {
  return (
    <Background>
    <SafeAreaView style={{marginHorizontal:40,marginVertical:100}}>
     <Text style={{color:"black",fontSize:70,marginBottom:40}}>Let's Start</Text>
     <Btn bgColor={green} textColor="white" btnLabel="Login" Press={() => props.navigation.navigate("Login")}/>
     <Btn bgColor="white" textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")}/>
    </SafeAreaView>
    </Background>
  )
}

export default Home