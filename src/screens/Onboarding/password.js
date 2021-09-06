import React, {memo} from 'react';
import {ThemeProvider} from 'react-native-elements';

import Background from '../../components/Background';
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import {theme} from "../../config/theme";
import {Text, View, StyleSheet,Image,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../../components/Typography/Typography';
import TextInput from '../../components/CustomInputs/PasswordField';
import TextField from "../../components/CustomInputs/InputField"
import Button from '../../components/CustomButtons/Button';
import Nav from "../../components/Headers/header"
import PhoneNumberInput from '../../components/CustomInputs/PhoneInput';
const LoginScreen = ({navigation}) => (
  <Container>
    <Header >
<Nav/>

    </Header>
    <Content>

   

<KeyboardAvoidingView enabled={false} style={styles.inputView}>

        <Typography size={22} type={'medium'} style={styles.title}>
          Sign Up
        </Typography>
        <Typography
          size={12}
          type={'light'}
          color={'textSecondary'}
          style={styles.subtitle}>
          Set you account details
        </Typography>

        <TextField label={"Name"} placeholder={"Enter name"}/>
    
          <TextInput placeholder="********" label="Choose Password"  />
          <TextInput placeholder="********" label="Confirm Password"  />

          <View style={styles.privacy}>
          <Typography size={12} style={{paddingLeft:10,paddingRight:10}} type={"medium"} color={"textTertiary"} >By continuing you agree to our <Text style={{color:theme.colors.primary}}>Terms of Service</Text> and <Text style={{color:theme.colors.primary}}>Privacy Policy</Text></Typography>


          </View>
        
        <Button style={{marginTop: 20}} title="Sign Up" />
        <View style={styles.signup}>
        <Typography size={12} type={"semiBold"} color={"textPrimary"} >Already have an account ?</Typography>
        <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")}>
        <Typography size={12} type={"semiBold"} color={"primary"} > Log In</Typography>
        </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    

    </Content>
    <Footer></Footer>
  </Container>
);

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    marginLeft: 10,
  },
  subtitle: {
    marginBottom: 30,
    marginLeft: 10,
  },
  forgetPass: {
  
    flexDirection: 'row',
justifyContent:"flex-end"

  },
  tinyLogo:{
    height:50,
 marginTop:40,
    resizeMode:"contain"
  },
  image:{
      flexDirection:"row",
      justifyContent:"center",
   marginBottom:30
      
  },
  signup:{
      flexDirection:"row",
      justifyContent:"center",
      marginTop:20,
      marginBottom:20
  },
  privacy:{
      flexDirection:"row",
  }
});

export default memo(LoginScreen);
