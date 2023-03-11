import React from "react";
import {Text, StyleSheet} from 'react-native';

const componentsScreen = ()=>{
    return <Text style= {styles.textstyle}>this is my first component</Text>;
};




const styles= StyleSheet.create({
    textstyle:{
        fontSize: 30,
    }
})
export default componentsScreen;