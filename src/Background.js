import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

const Background = ({children}) => {
  return (
    <View>
     <ImageBackground source={require("./assets/photo.jpg")} style={{ height:"100%",width:"100%"}}/>
     <View style={{position:"absolute"}}>
        {children}
     </View>
    </View>
  )
}

export default Background

const styles = StyleSheet.create({})