import React, {memo} from 'react';
import {ThemeProvider,ListItem} from 'react-native-elements';

import Background from '../../components/Background';
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import {Icon,Divider} from 'react-native-elements';
import {Text, View, StyleSheet,Image,KeyboardAvoidingView,FlatList} from 'react-native';
import ClaimList from '../../components/List/ClaimList';
import AvatarWithMore from '../../components/List/AvatarWithMore';
import  Search from '../../components/CustomInputs/SearchField';
import Typography from '../../components/Typography/Typography';
import Nav from "../../components/Headers/header"
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/CustomButtons/Button';


const showCustomer = ({navigation}) => (
     <Container>
    <Header >
    <Nav

leftComponent={
    <Icon
        onPress={() => navigation.toggleDrawer()}
        name={"list"}
        type={"feather"}
        size={25}
        style={{ marginLeft: 25, transform: [{ rotate: '-45deg' }] }}
    />}

rightComponent={
    <View style={{ flexDirection: 'row' }}>
        <Icon
            name={"heart"}
            type={"ionicon"}
            color={"red"}
            size={25}
            style={{ marginRight: 14 }}
        />
        <Icon
            name={"cart-outline"}
            type={"ionicon"}
            color={"#ffb300"}
            size={25}
            // style={{ marginRight: 2}}
        />
    </View>
}
/>
    </Header>
    <Content>

    <TouchableOpacity onPress={()=>navigation.goBack()}>
           <View style={{marginTop:8,alignItems:'flex-start',flexDirection:'row'}}>
               <Icon
               name={"chevron-back-outline"}
               type={'ionicon'}
               size={15}
               color={"black"}
               />
               <Typography style={{marginTop:1}} type={"bold"}>Back</Typography>
           </View>
           </TouchableOpacity>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <View>
           <Typography size={15} type={"italic"} style={{marginTop:15,marginBottom:4}}>ORDER DETAIL</Typography>
            <Divider style={{ backgroundColor: "#ffb300", height: 1,width:120,marginLeft:-2 }} />
            </View>
            <View style={{alignItems:'flex-end'}}>
           <Typography size={13} type={"italic"} style={{marginTop:15,marginBottom:4}}>21st JULY 2021</Typography>
            <Divider style={{ backgroundColor: "#ffb300", height: 1,width:100,marginLeft:-2 }} />
            </View>
            </View>
            <View style={{marginTop:40}}>
            <ClaimList
             
         name={"NAME OF THE PRODUCT (WITH FULL DESCRIPTION IN TWO LINES AND THEN ELIPSIS)"}
         date={"12 Jan 2021"}
        //  amount={"Delivered"}
        Quantity={'3'}
         badgeText={"Approved"}
         size={"Size: M"}
         badgeColor={"green"}
         avatar_url={"https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_960_720.jpg"}
         />
         </View>
         <ListItem style={{marginLeft:-18,marginTop:'30%',marginRight:20}}>
             <ListItem.Subtitle numberOfLines={2} style={{color:'black',fontSize:14}}>
         Address: This is going to be the address in maximum 2 lines.Address: This is going to be the address in maximum 2 lines.Address: This is going to be the address in maximum 2 lines.Address: This is going to be the address in maximum 2 lines.
         </ListItem.Subtitle>
         </ListItem>
         <Typography size={14} style={{marginTop:-8}}>Phone Number: 9876543212</Typography>
         <View style={{justifyContent:'flex-end',alignItems:'flex-end',marginTop:40}}>
         <Typography size={14} type={'light'}>Discount Applied: 0</Typography>
         <Typography size={14} type={"light"}>Date of delivery: 22th July 2021</Typography>
         <Typography size={14} type={"light"}>Date of order: 21st July 2021</Typography>
         <Typography size={14} type={"light"}>Payment Method: Debit Card</Typography>
         <Typography size={14} type={"bold"} style={{marginTop:10}}>TOTAL: 5400/-</Typography>

         </View>

    </Content>
    <Footer>
    <Button style={{marginTop: 5,width:'89%',marginRight:24,marginLeft:24}} title="CONTINUE SHOPPING" />

    </Footer>
    </Container>
);

const styles = StyleSheet.create({

    infoCard:{

paddingTop:16,
paddingBottom:16,
flexDirection:"row",
    },
    infoChild:{
flex:1,
justifyContent:"center",
alignItems:"center"
    },

    border:{
borderLeftWidth:2,
borderColor:"#e2e2e2"
    },

 
    addCust:{
lineHeight:40,
marginLeft:70
},
table:{
    margin:16,
    marginTop:8,
    marginBottom:0,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
overflow:"hidden"
}
,
header:{
    backgroundColor:"#E0E0E0",
    padding:8,
    paddingLeft:12
},
row:{
    backgroundColor:"#F2F2F2",
    flexDirection:"row",
    padding:12,
    justifyContent:"space-between",
    borderBottomWidth:1,
    borderBottomColor:"#e2e2e2",
}

})
export default memo(showCustomer);