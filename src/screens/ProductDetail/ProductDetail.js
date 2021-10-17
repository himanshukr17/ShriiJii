import React, { memo } from 'react';
import { ThemeProvider } from 'react-native-elements';

import Background from '../../components/Background';
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../../components/Typography/Typography';
import TextInput from '../../components/CustomInputs/PasswordField';
import BottomNav from "../../components/BottomNav/Main"
import IconButton from '../../components/CustomButtons/IconButton';
import { Icon ,Avatar} from 'react-native-elements';
import { theme } from "../../config/theme"
import Nav from "../../components/Headers/header"
import Banner from "../../components/Misc/BannerCard"
import Search from '../../components/CustomInputs/SearchField';
import AvatarList from '../../components/List/AvatarList';
import { Divider } from 'react-native-paper'
import Button from '../../components/CustomButtons/Button';
import { BlurView } from "@react-native-community/blur";
import PhoneNumberInput from '../../components/CustomInputs/PhoneInput';
import { BoxShadow } from 'react-native-shadow'
import Card from "../../components/Cards/ProductCardH"
import { TouchableOpacity } from 'react-native-gesture-handler';
const LoginScreen = (props) => (
    <Container>
        <Header  >
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
                        <Icon onPress={()=> props.navigation.navigate("Wishlist")}
                            name={"heart"}
                            type={"ionicon"}
                            color={"red"}
                            size={25}
                            style={{ marginRight: 14 }}
                        />
                        </View>
                        <Icon onPress={()=> props.navigation.navigate("Cart")}
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
        <Content style={{padding:0}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
           <View style={{marginTop:8,alignItems:'flex-start',flexDirection:'row',marginLeft:6}}>
               <Icon
               name={"chevron-back-outline"}
               type={'ionicon'}
               size={15}
               color={"black"}
               />
               <Typography style={{marginTop:1}} type={"bold"}>Back</Typography>
           </View>
           </TouchableOpacity>
<View style={{marginLeft:14}}>
           <Typography size={15} type={"italic"} style={{marginTop:15,marginBottom:4}}>BLOGS</Typography>
            <Divider style={{ backgroundColor: "#ffb300", height: 1.5,width:'30%',marginLeft:-2 }} />
            </View>
<View style={{marginTop:10}}>
            <Avatar  border={6} source={{uri : 'https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_960_720.jpg'}} style={{resizeMode : 'contain',height:250,width:'100%'}}>
  <Avatar.Accessory type="ionicon" name="heart" color="#a8a8a8" style={{backgroundColor:'white',marginTop:-100,top:105,right:5}} size={35}/>
  <Avatar.Accessory type="ionicon" name="share-social" color="#a8a8a8" style={{backgroundColor:'white',marginTop:-100,bottom:5,right:5}} size={35}/>
  </Avatar>
  </View>
  <View style={{padding:24}}>
      <Typography size={15} type={"extraBold"}>Blog Name (This can exceed till two lines of this space and then we will use ellipsis) - Developers.</Typography>
  <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
  <Typography style={{marginTop:10}}>by Mohit Gopal</Typography>
  <Typography style={{marginTop:10,marginRight:5}}>4 min</Typography>
  </View>
<Typography size={13} style={{marginTop:25}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</Typography>
  </View>
  <Button style={{marginTop: 5,width:'89%',marginRight:24,marginLeft:24}} title="SHARE ON WHATSAPP" />

        </Content>
        <Footer>

        </Footer>
    </Container>
);

const styles = StyleSheet.create({
    inputView: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    header: {
        lineHeight: 40,
        marginLeft: 10,

    }
    ,
    main: {
        flex: 1,
        justifyContent: 'space-between'
    },
    bottomButton: {
        width: "100%",
        paddingBottom: 20,
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 10,
        alignItems: "flex-end"
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30
    },
    buttonCard: {

        flexDirection: "column",
        alignItems: "center"
    },
    recentProducts: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: 45,
        marginLeft: 5
    },
    recent: {
        marginBottom: 10
    },
    banner: {
        marginTop: 16
    }

});

export default memo(LoginScreen);
