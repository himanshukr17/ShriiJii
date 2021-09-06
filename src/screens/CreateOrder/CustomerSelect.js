import React, {memo} from 'react';
import Selector from "../../components/Misc/Selector"
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import Typography from "../../components/Typography/Typography";
import {Icon} from 'react-native-elements';
import Cards from "../../components/Misc/DataCard"
const LoginScreen = ({navigation}) => (
  <View style={styles.container}>
   <Selector 
   leftIcon={
   <Icon
    type={"feather"}
    
    size={30}
    name={"user"}
    
    />
  }

  placeholder={"Select customer"}
   />

   <View style={styles.CardContainer}>
<Cards value={"$ 45,000"} title={"Closing Balance"} />
<Cards value={"Brij Lal"} title={"Sales Rep."} />
   </View>


<View style={styles.dues}>
   <Typography color="red" size={24} bold type={"bold"} >
Imm Dues: $ 45,000
       </Typography>
       <Typography style={{marginTop:8}} color="textPrimary" size={12}  >
(Total outstanding :$ 35,000)
       </Typography>
       </View>


  </View>

  
);

const styles = StyleSheet.create({
    container:{
flex:1
    },
    CardContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:32
    },

    dues:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        marginTop:32
    }
});

export default memo(LoginScreen);
