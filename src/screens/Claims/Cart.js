import React, {memo} from 'react';
import {ThemeProvider} from 'react-native-elements';
import Button from '../../components/CustomButtons/Button';

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


const showCustomer = (props) => (
     <Container>
    <Header >
    <Nav

leftComponent={
    <Icon
        onPress={() => props.navigation.toggleDrawer()}
        name={"list"}
        type={"feather"}
        size={25}
        style={{ marginLeft: 25, transform: [{ rotate: '-45deg' }] }}
    />}

rightComponent={
    <View style={{ flexDirection: 'row' }}>
        <View style={{marginRight: 14 }}>
        <Icon
            onPress={()=> props.navigation.navigate("Wishlist")}
            name={"heart"}
            type={"ionicon"}
            color={"red"}
            size={25}
            style={{ marginRight: 14 }}
        />
        </View>
        {/* <Icon
            onPress={()=> props.navigation.navigate("Cart")}
            name={"cart-outline"}
            type={"ionicon"}
            color={"#ffb300"}
            size={25}
            // style={{ marginRight: 2}}
        /> */}
    </View>
}
/>

    </Header>
    <Content>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
    <View style={{marginTop:4}}>
           <Typography size={15} type={"italic"} style={{marginTop:15,marginBottom:4}}>MY CART</Typography>
            <Divider style={{ backgroundColor: "#ffb300", height: 1,width:90,marginLeft:-3 }} />
            </View>
            <Typography>4 Items</Typography>
            </View>
         <View style= {{marginTop:16,marginBottom:16}}>
         {/* <Search/> */}
         </View>
     
         <ClaimList
             
             name={"NAME OF THE PRODUCT (WITH FULL DESCRIPTION IN TWO LINES AND THEN ELIPSIS)"}
             date={"12 Jan 2021"}
            price={'500/-'}
            Quantity={'3'}
             badgeText={"Approved"}
             size={"Size: M"}
             badgeColor={"green"}
             avatar_url={"https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_960_720.jpg"}
             />
             <ClaimList
             
             name={"NAME OF THE PRODUCT (WITH FULL DESCRIPTION IN TWO LINES AND THEN ELIPSIS)"}
             date={"12 Jan 2021"}
            price={'900/-'}
            Quantity={'1'}
             badgeText={"Approved"}
             size={"Size: L"}
             badgeColor={"green"}
             avatar_url={"https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_960_720.jpg"}
             />
             <ClaimList
             
             name={"NAME OF THE PRODUCT (WITH FULL DESCRIPTION IN TWO LINES AND THEN ELIPSIS)"}
             date={"12 Jan 2021"}
            price={'100/-'}
            Quantity={'3'}
             badgeText={"Approved"}
             size={"Size: M"}
             badgeColor={"green"}
             avatar_url={"https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_960_720.jpg"}
             />
             <ClaimList
             
             name={"NAME OF THE PRODUCT (WITH FULL DESCRIPTION IN TWO LINES AND THEN ELIPSIS)"}
             date={"12 Jan 2021"}
            price={'1500/-'}
            Quantity={'3'}
             badgeText={"Approved"}
             size={"Size: M"}
             badgeColor={"green"}
             avatar_url={"https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_960_720.jpg"}
             />
             
       
       
    </Content>
    <Footer>
    <Button style={{marginTop: 5,width:'89%',marginRight:24,marginLeft:24}} title="CHECKOUT AT 3,000" />

    </Footer>
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