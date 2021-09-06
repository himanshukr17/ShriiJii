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
import { Icon, Avatar } from 'react-native-elements';
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
const LoginScreen = ({ navigation }) => (
    <Container>
        <Header  >
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
        <Content style={{ padding: 0 }}>
            {/* <TouchableOpacity onPress={()=>navigation.goBack()}>
           <View style={{marginTop:8,alignItems:'flex-start',flexDirection:'row',marginLeft:6}}>
               <Icon
               name={"chevron-back-outline"}
               type={'ionicon'}
               size={15}
               color={"black"}
               />
               <Typography style={{marginTop:1}} type={"bold"}>Back</Typography>
           </View>
           </TouchableOpacity> */}
            {/* <View style={{marginLeft:14}}>
           <Typography size={15} type={"italic"} style={{marginTop:15,marginBottom:4}}>BLOGS</Typography>
            <Divider style={{ backgroundColor: "#ffb300", height: 1.5,width:'30%',marginLeft:-2 }} />
            </View> */}
            <View >
                <Avatar border={6} source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_960_720.jpg' }} style={{ resizeMode: 'contain', height: 250, width: '100%' }}>
                    <Avatar.Accessory type="ionicon" name="heart" color="#a8a8a8" style={{ backgroundColor: 'white', marginTop: -100, top: 105, left:5 }} size={35} />
                    <Avatar.Accessory type="ionicon" name="heart" color="#a8a8a8" style={{ backgroundColor: 'white', marginTop: -100, top: 105, right: 5 }} size={35} />
                    <Avatar.Accessory type="ionicon" name="share-social" color="#a8a8a8" style={{ backgroundColor: 'white', marginTop: -100, bottom: 5, right: 5 }} size={35} />
                </Avatar>
            </View>


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
