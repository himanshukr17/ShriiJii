
import ImageViewer from 'react-native-image-zoom-viewer';
import React, { memo, useState } from 'react';
import { ThemeProvider, ListItem } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';
import DropDownPicker from 'react-native-dropdown-picker';
import NumericInput from 'react-native-numeric-input'
import Background from '../../components/Background';
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../components/Cards/CarouselCardItem'
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, FlatList, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../../components/Typography/Typography';
import TextInput from '../../components/CustomInputs/PasswordField';
import BottomNav from "../../components/BottomNav/Main"
import IconButton from '../../components/CustomButtons/IconButton';
import { Icon, Avatar } from 'react-native-elements';
import { Divider } from 'react-native-paper';
import { theme } from "../../config/theme"
import Nav from "../../components/Headers/header"
import Banner from "../../components/Misc/BannerCard"
import Search from '../../components/CustomInputs/SearchField';
import AvatarList from '../../components/List/AvatarList';
// import { Divider } from 'react-native-paper'
import Button from '../../components/CustomButtons/Button';
import { BlurView } from "@react-native-community/blur";
import PhoneNumberInput from '../../components/CustomInputs/PhoneInput';
import { BoxShadow } from 'react-native-shadow'
import Card from "../../components/Cards/ProductCardH"
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { SliderBox } from "react-native-image-slider-box";

const LoginScreen = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Red', value: '0' },
        { label: 'Blue', value: '1' },
        { label: 'Green', value: '2' },
        { label: 'Orange', value: '3' },
        { label: 'Violet', value: '4' },
        { label: 'Black', value: '5' },
        { label: 'White', value: '6' }
    ]);

    const images = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        // require('./assets/images/girl.jpg'),          // Local image
    ]

    const isCarousel = React.useRef(null)

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
                {/* <TouchableOpacity onPress={()=>navigation.goBack()}> */}

                <View >

                    {/* <Carousel
                        // onPress={()=>props.navigation.navigate("Add customer",{CarouselCardItem})}
                        layout='default'
                        layoutCardOffset={9}
                        ref={isCarousel}
                        data={data}
                        renderItem={CarouselCardItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        inactiveSlideShift={0}
                        // useScrollView={true}
                        hasParallaxImages={true}
                    /> */}

                    <SliderBox
                        images={images}
                        sliderBoxHeight={200}
                        onCurrentImagePressed={index => 
                            console.warn(`image ${index} pressed`)}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                    />
                    {/* <Avatar border={6} source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_960_720.jpg' }} style={{ resizeMode: 'contain', height: 250, width: '100%' }}>
                    <Avatar.Accessory onPress={()=>props.navigation.goBack()} type="ionicon" name="caret-back-outline" color="#a8a8a8" style={{ backgroundColor: 'white', marginTop: -100, top: 105, left: 5 }} size={35} />
                    <Avatar.Accessory type="ionicon" name="heart" color="#a8a8a8" style={{ backgroundColor: 'white', marginTop: -100, top: 105, right: 5 }} size={35} />
                    <Avatar.Accessory type="ionicon" name="share-social" color="#a8a8a8" style={{ backgroundColor: 'white', marginTop: -100, bottom: 5, right: 5 }} size={35} />
                    
                </Avatar> */}
                </View>
                <ListItem>
                    <ListItem.Content marginLeft={-10}>
                        <ListItem.Title size={14} numberOfLines={2} type={"extraBold"}>PRODUCT NAME NAME OF THE PRODUCT (WITH FULL DESCRIPTION IN TWO LINES AND THEN ELIPSIS)</ListItem.Title>
                        <ListItem.Subtitle>Category Name</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                {/* <AirbnbRating
  count={11}
//   reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
  defaultRating={11}
  size={20}
/> */}
                <Rating
                    type='star'
                    ratingCount={5}
                    showRating={false}
                    imageSize={24}
                    style={{ alignItems: 'flex-start', marginLeft: 10 }}
                //   showRating
                //   onFinishRating={this.ratingCompleted}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
                    <Typography size={25} style={{ marginTop: 10, marginLeft: 10 }}>Rs.13000</Typography>
                    <ListItem.Subtitle style={styles.subtitleStyle2}>Rs.15000/-</ListItem.Subtitle>
                </View>
                < View style={{ marginTop: 10, marginLeft: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Typography size={15} style={{ marginBottom: 2 }}> Quantity : </Typography>
                        <NumericInput
                            //value={this.state.value} 
                            onChange={() => { }}
                            //onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                            totalWidth={130}
                            totalHeight={35}
                            iconSize={25}
                            step={1}
                            valueType='real'
                            rounded
                            textColor='#000000'
                            iconStyle={{ color: 'white' }}
                            minValue={0}
                            rightButtonBackgroundColor='#c0c0c0'
                            leftButtonBackgroundColor='#c0c0c0' />
                    </View>
                    <View style={{ marginRight: 10, marginTop: 0, alignItems: 'center' }}>
                        <Typography size={15} style={{ marginBottom: 2 }}>Colour: </Typography>

                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={{ width: 100, height: 35 }}
                        />
                    </View>
                </View>
                {/* <Typography size={12}  type={"semiBold"} >Category Name</Typography> */}
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <Typography size={14} type={"extraBold"}>PRODUCT DESCRIPTION</Typography>
                    <Typography size={13} style={{ marginTop: 1 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Typography>
                    <Typography size={14} style={{ marginTop: 30 }} type={"extraBold"}>STORY BEHIND THE CATEGORY</Typography>
                    <Typography size={13} style={{ marginTop: 1 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</Typography>
                </View>
            </Content>
            <Footer>
                <View style={{ flexDirection: 'row' }}>
                    <Button style={{ marginTop: 5, width: '48%', marginLeft: 10, borderRadius: 0 }} title="ADD TO CART" />
                    {/* <Typography size={20}>|</Typography> */}
                    <Divider orientation="vertical" width={1.1} color="#000000" />
                    <Button style={{ marginTop: 5, width: '48%', marginRight: 10, borderRadius: 0 }} title="BUY NOW" />
                </View>
            </Footer>
        </Container>
    )
};

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
    subtitleStyle2: {
        marginTop: 15,
        paddingTop: 0,
        lineHeight: 18,
        color: theme.colors.textPrimary,
        fontFamily: "NunitoLight",
        fontSize: 18,
        marginLeft: 10,
        textDecorationLine: 'line-through'
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
