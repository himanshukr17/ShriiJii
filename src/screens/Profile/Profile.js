import React from 'react'
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import { Icon, Avatar } from 'react-native-elements';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import Nav from "../../components/Headers/header"
import Typography from '../../components/Typography/Typography';
// import Avatarwithouter from '../../components/List/Avatarwithouter';
// import HollowButton from "../../components/CustomButtons/HollowButton"
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
// import Avatar from "../../components/List/Avatar"
import Listitems from "../../components/List/Listitems"
import { Divider } from 'react-native-paper'


export default function Profile(props) {
    return (
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
                            <Icon
                                onPress={() => props.navigation.navigate("Wishlist")}
                                name={"heart"}
                                type={"ionicon"}
                                color={"red"}
                                size={25}
                                style={{ marginRight: 15 }}
                            />
                            </View>
                            <Icon
                                onPress={() => props.navigation.navigate("Cart")}
                                name={"cart-outline"}
                                type={"ionicon"}
                                color={"#ffb300"}
                                size={25}
                                style={{ marginLeft: 12 }}
                            />
                        </View>
                    }
                />

            </Header>
            <Content>
                <View style={{ marginTop: 4 }}>
                    <Typography size={15} type={"italic"} style={{ marginTop: 15, marginBottom: 4 }}>MY PROFILE</Typography>
                    <Divider style={{ backgroundColor: "#ffb300", height: 1.5, width: '35%', marginLeft: -3 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ marginTop: "8%", flexDirection: 'row', marginBottom: "8%" }}>
                        <Avatar
                            rounded
                            borderRadius={150 / 2}
                            borderWidth={1}
                            borderColor={"black"}
                            size={60}
                            source={{
                                uri: 'https://www.clearmountainbank.com/wp-content/uploads/2020/04/male-placeholder-image.jpeg'
                            }}
                        />
                        <View style={{ marginLeft: 10 }}>

                            <Typography size={14} type={"extraBold"} style={{ marginTop: 12 }}>MOHIT GOPAL</Typography>
                            <Typography size={12} type={"semiBold"} style={{ marginTop: 4 }}>customer</Typography>
                            {/* <Typography size={10} color={"white"} type={"semiBold"} style={{ marginTop: 8 }}>{props.details.EMP_CODE}</Typography> */}

                        </View>
                    </View>
                    <Typography style={{ marginTop: "6%" }} color="yellow" size={13} type={"bold"}>EDIT</Typography>
                </View>
                <Typography style={{ marginTop: -11 }}>Address: First Line, Second Line, Third Line and the final address here.</Typography>
                <Divider style={{ backgroundColor: "#b7b7b7", height: 1.5, marginLeft: -50, marginRight: -100, marginTop: 25 }} />
                <TouchableOpacity onPress={() => { }}>
                    <View style={{ marginTop: 45, flexDirection: 'row', marginBottom: 15 }}>
                        <Icon
                            name={"heart"}
                            type={"ionicon"}
                            color={'red'}
                            style={{ alignItems: 'flex-start', marginLeft: 10 }}
                        /><View style={{ marginLeft: 15 }}>
                            <Typography size={18}>MY WISHLIST</Typography>
                        </View></View></TouchableOpacity>
                <Divider style={{ backgroundColor: 'grey', height: 0.5, width: '88%', marginLeft: '12%', marginTop: 3 }} />
                <TouchableOpacity onPress={() => { }}>
                    <View style={{ marginTop: 15, flexDirection: 'row', marginBottom: 15 }}>
                        <Icon
                            name={"shopping-bag"}
                            type={"feather"}
                            // color={'red'}
                            style={{ alignItems: 'flex-start', marginLeft: 10 }}
                        /><View style={{ marginLeft: 15 }}>
                            <Typography size={18}>MY ORDERS</Typography>
                        </View></View></TouchableOpacity>
                <Divider style={{ backgroundColor: 'grey', height: 0.5, width: '88%', marginLeft: '12%', marginTop: 3 }} />
                <TouchableOpacity onPress={() => { }}>
                    <View style={{ marginTop: 15, flexDirection: 'row', marginBottom: 15 }}>
                        <Icon
                            name={"star"}
                            type={"ionicon"}
                            // color={'red'}
                            style={{ alignItems: 'flex-start', marginLeft: 10 }}
                        /><View style={{ marginLeft: 15 }}>
                            <Typography size={18}>RATE OUR APP</Typography>
                        </View></View></TouchableOpacity>
                <Divider style={{ backgroundColor: 'grey', height: 0.5, width: '88%', marginLeft: '12%', marginTop: 3 }} />
                <TouchableOpacity onPress={() => { }}>
                    <View style={{ marginTop: 15, flexDirection: 'row', marginBottom: 15 }}>
                        <Icon
                            name={"share-social"}
                            type={"ionicon"}
                            // color={'red'}
                            style={{ alignItems: 'flex-start', marginLeft: 10 }}
                        /><View style={{ marginLeft: 15 }}>
                            <Typography size={18}>SHARE OUR APP</Typography>
                        </View></View></TouchableOpacity>
                <Divider style={{ backgroundColor: 'grey', height: 0.5, width: '88%', marginLeft: '12%', marginTop: 3 }} />
                <Divider style={{ backgroundColor: "#b7b7b7", height: 1, marginLeft: -50, marginRight: -100, marginTop: 50 }} />
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")}>
                        <Typography size={16} type={"extraBold"}>LOGOUT</Typography>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
    )
}
