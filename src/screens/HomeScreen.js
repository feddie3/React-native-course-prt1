import React from "react";
import { Text, StyleSheet,View,Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
 
  return ( <View> 
    <Text style={styles.text}>HomeScreen</Text>
    <Button 
    onPress={()=> navigation.navigate('Components')}
    title="Go to compentents demo"
    />
    <Button 
    title="Go to List demo"
    onPress={()=>navigation.navigate('List')}
    />
    <Button
    title= 'Imagescreen'
    onPress={()=>navigation.navigate('Image')}
    
    />
    <Button
    title= 'counterScreen'
    onPress={()=>navigation.navigate('Counter')}
    
    />
     <Button
    title= 'ColorScreen'
    onPress={()=>navigation.navigate('Color')}
    
    />
    <Button
    title="SquareScreen"
    onPress={()=>navigation.navigate('Square')}
    
    />

  </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
