import react from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = props=>{
    console.log(props);
    return (
        <View>
            <Image source={props.imageSource}></Image>
        <Text>{props.title}</Text>
        <Text>Image score - {props.score}</Text>
        </View>
    );
}


const styles= StyleSheet.create({});

export default ImageDetail;