import react from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen =() =>{
    const friends=[
        { name: 'Friend 1', age:'Age 20'},
        { name: 'Friend 2', age:'Age 45'},
        { name: 'Friend 3', age:'Age 32'},
        { name: 'Friend 4', age:'Age 27'},
        { name: 'Friend 5', age:'Age 53'},
        { name: 'Friend 6', age:'Age 30'},
        { name: 'Friend 7', age:'Age 33'},
        { name: 'Friend 8', age:'Age 22'},
        { name: 'Friend 9', age:'Age 25'},
        { name: 'Friend 10', age:'Age 22'},
    ];
    return(
        <FlatList
        
        
        keyExtractor={(friend)=> friend.name}
         data={friends} 
         renderItem={({item})=>{
            return <Text style={syles.textStyle} >{item.name} - {item.age}</Text>}}
        />
    );
}
const syles= StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;