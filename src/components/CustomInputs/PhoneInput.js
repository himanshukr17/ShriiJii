import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import {theme } from "../../config/theme"
import PhoneInput from "react-native-phone-number-input";

 
const App = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <View style={{width:"100%",alignItems:"center",justifyContent:"center"}} >
    
          {/* {showMessage && (
            <View >
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )} */}
<View style={{flex:1,justifyContent:"flex-start",alignItems:"flex-end",flexDirection:"row",width:"100%",paddingBottom:0}}>
<Text style={styles.labelStyle}>Mobile number</Text>
</View>
          
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            
            textInputStyle={styles.textInput}
            containerStyle={styles.container}
            textContainerStyle={styles.textContainerStyle}
            codeTextStyle={styles.textInput}
            flagButtonStyle={{height:30,width:48}}
            autoFocus
          />
          {/* <TouchableOpacity
          
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}
          >
            <Text>Check</Text>
          </TouchableOpacity> */}
   
      </View>
    </>
  );
};


const styles = StyleSheet.create({
    textInput:{
       elevation:0,
       fontFamily:"Nunito-Regular",
    fontSize:14,
    fontWeight:"normal",
   
  
    
    },

container:{
    backgroundColor:"rgba(0,0,0,0)",
    borderBottomWidth:2,
    borderBottomColor:"#e2e2e2",

   justifyContent:"center",
   alignItems:"center",
 
    width:"93%",
   
  
},
textContainerStyle:{
    backgroundColor:"rgba(0,0,0,0)",
  
   
   
},

labelStyle:{
    fontFamily:"Nunito-Medium",
    fontSize:14,
    fontWeight:"normal",
   lineHeight:18,
 paddingBottom:5,
   paddingLeft:10,

    color:theme.colors.textSecondary
}


})
 
export default App;