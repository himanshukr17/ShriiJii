import React from 'react'
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import LillBanner from "../../components/Misc/LillBanner"
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import Nav from "../../components/Headers/header"
import Typography from '../../components/Typography/Typography';
import Avatarwithouter from '../../components/List/Avatarwithouter';
import HollowButton from "../../components/CustomButtons/HollowButton"
import {Text, View, StyleSheet,Image,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import Cards from "../../components/Misc/DataCard"
import SmallButton from "./../../components/CustomButtons/smallButton";
export default function CustomerDetail() {
    return (
     <Container>
         <Header>
<Nav/>
         </Header>
<Content>


<View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: 5,
        }}>

            <View>
        <Typography
          size={20}
          style={{marginLeft: 5}}
          type={'bold'}
          color={'textPrimary'}>
          Customer Details
        </Typography>
       
        </View>
        <SmallButton 
     
        title="View Ledger" type={"outline"}/>


      </View>







<View style={styles.container}>
<Avatarwithouter
         name={"Taylor Swift"}
         subtitle={"7387637284"}
      
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

{/* <View style={{flexDirection:"row"}}> 
<View style={{marginTop:10}}>
<Typography size={20} type={"extraBold"}>Customer Details</Typography>
</View>
<View style={{marginLeft:59}}>
<HollowButton 
title="View Ledger"
size={11}
/>
</View>
</View>
{/* <Avatarwithouter
         name={"Taylor Swift"}
         subtitle={"7387637284"}
      
         /> */}





{/* 
<View style={{alignItems:'center',marginTop:10}}>
<Typography size={20} type="extraBold" color="red">Imm Dues : $45600</Typography>
<Typography size={20} type="bold">(Total Outstanding : $45600)</Typography>
</View>  */}
</Content>
<Footer></Footer>

     </Container>

    )
}
const styles = StyleSheet.create({
    container:{
flex:1
    },
    CardContainer:{
      
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:32
    },

    dues:{
      
        justifyContent:"center",
        alignItems: "center",
        marginTop:32
    }
});