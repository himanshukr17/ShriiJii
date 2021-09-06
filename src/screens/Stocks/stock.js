import React, {memo} from 'react';
import {ThemeProvider} from 'react-native-elements';

import Background from '../../components/Background';
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import {Icon,Divider} from 'react-native-elements';
import {Text, View, StyleSheet,Image,KeyboardAvoidingView,FlatList} from 'react-native';
import StockList from '../../components/List/StockList';
import AvatarWithMore from '../../components/List/AvatarWithMore';
import  Search from '../../components/CustomInputs/SearchField';
import Typography from '../../components/Typography/Typography';
import Nav from "../../components/Headers/header"


const showCustomer = ({navigation}) => (
     <Container>
    <Header >
<Nav 

  
/>
    </Header>
    <Content>
    <View style= {{flexDirection:'row',justifyContent:"space-between",alignItems: "center",marginRight:5}}>
        <Typography size={24} style={styles.header} type={"bold"} color={"textPrimary"}>Stocks </Typography>
   
        </View>
      
         <View style= {{marginTop:16,marginBottom:16}}>
         <Search/>
         </View>
     
           <StockList
             bottomDivider
         name={"Pulsor (1kg)"}
         desc={"Pulsor is nice product"}
         Plant={"Plant 1"}
amount={"₹ 456"}
stock={12}
discount={"12%"}
         />
       
       <StockList
             bottomDivider
         name={"Pulsor (1kg)"}
         desc={"Pulsor is nice product"}
         Plant={"Plant 1"}
amount={"₹ 456"}
stock={12}
discount={"12%"}
         />
       
       
    </Content>
    <Footer></Footer>
    </Container>
);

const styles = StyleSheet.create({
  header:{
lineHeight:40,
marginLeft:5,

  },
    addCust:{
lineHeight:40,
marginLeft:70
},

})
export default memo(showCustomer);