import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const componentsScreen = ()=>{
    const name ='feddie';
    return  (
     <View>
     <Text style= {styles.textstyle}>getting started with react native</Text>
     <Text style={styles.nameStyle}>My name is {name}</Text>
     
     </View>
    );
}




const styles= StyleSheet.create({
    textstyle:{
        fontSize: 45,
    },
    nameStyle:{
        fontSize:'20'
    }
})
export default componentsScreen;