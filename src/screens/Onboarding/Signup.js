import React, {memo} from 'react';
import {ThemeProvider} from 'react-native-elements';

import Background from '../../components/Background';
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import {Text, View, StyleSheet,Image,KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../../components/Typography/Typography';
import TextInput from '../../components/CustomInputs/PasswordField';
import IconButton from '../../components/CustomButtons/IconButton';
import Nav from "../../components/Headers/header"
import PhoneNumberInput from '../../components/CustomInputs/PhoneInput';
const LoginScreen = ({navigation}) => (
  <Container>
    <Header >
<Nav/>

    </Header>
    <Content>

   <View style={styles.main}>

<View style={styles.inputView}>

        <Typography size={22} style={{backgroundColor:"red"}} type={'medium'} style={styles.title}>
          Enter your mobile number
        </Typography>
       <View style={{marginTop:20}}>
        <PhoneNumberInput />

        </View>

      
        </View>

        <View style={styles.bottomButton}>
        <View style={{width:58}}>
        <IconButton padding={10} iconName={"chevron-right"} iconSize={35} onPress={()=>navigation.navigate("Otp")}  borderRadius={30}/>
        </View>

        </View>
        </View>
    </Content>
    <Footer></Footer>
  </Container>
);

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    marginLeft: 10,

  },
  main:{
      flex:1,
      justifyContent: 'space-between'
  },
  bottomButton:{
      width:"100%",
  paddingBottom:20,
      flexDirection:"column",
      justifyContent:"flex-end",
      padding:10,
      alignItems:"flex-end"
  }

});

export default memo(LoginScreen);
