import React, {memo} from 'react';
import {ThemeProvider,Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import Background from '../../components/Background';
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import {Text, View, StyleSheet,Image,KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../../components/Typography/Typography';
import TextInput from '../../components/CustomInputs/PasswordField';
// import Icon from '../../components/CustomButtons/IconButton';
import { Divider } from 'react-native-paper';
import Nav from "../../components/Headers/header"
import Button from '../../components/CustomButtons/Button';
import InputField from "../../components/CustomInputs/InputField";
import PhoneNumberInput from '../../components/CustomInputs/PhoneInput';
const SignupScreen = (props) => (
  <Container>
    <Header>
      <Nav
        centreComponent={
          <Typography color={"yellow"} size={27} type={"light"}>SIGNUP</Typography>
        }
        rightComponent={
          <View style={{ marginRight: 10 }}>
            <Typography color={"textTertiary"} size={15} type={"light"}>SKIP</Typography>
          </View>
        }
      />
    </Header>

    <Content>

   <View style={styles.inputView}>
   <View style={{flexDirection:'row',justifyContent:'center',marginBottom:10}}>
   <TouchableOpacity>
    <Icon
          name={'logo-google'}
          type={'ionicon'}
          style={{borderRadius:'50%'}}
          reverse={true}
          color={'#bb1409'}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon
          name={'facebook'}
          type={'feather'}
          style={{borderRadius:'50%'}}
          reverse={true}
          color={'#3b5998'}
        />
        </TouchableOpacity>
       </View>
       <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '20%',marginTop:15 }}>
          <Divider style={{ backgroundColor: "grey", height: 0.5, width: '45%', marginLeft: -3 }} />
          <Typography size={15} type={'bold'}> OR </Typography>
          <Divider style={{ backgroundColor: "grey", height: 0.5, width: '45%', }} />
        </View>

        <InputField placeholder="Email Address" />
        <View style={{ marginTop: -4 }}>
          <TextInput placeholder="Password" />
         {/* <View style={styles.forgetPass}> 
            <Typography size={14} type={"semiBold"} color={"yellow"} >Forget Password?</Typography>
          </View> */}
        </View>
        
      </View>
    </Content>
    <Footer>
    <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Button style={{ marginTop: 20, width: '40%' }} title="Sign Up" />
        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
          <Typography color="textSecondary">ALREADY HAVE AN ACCOUNT? </Typography>
          <TouchableOpacity  onPress = {() => props.navigation.navigate("LoginScreen")}>
          <Typography color="textPrimary" type={"extraBold"}>SIGN IN.</Typography>
          </TouchableOpacity>
        </View>
      </View>

    </Footer>
  </Container>
);

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    marginTop:50,
    justifyContent: 'flex-start',
  },
  title: {
    marginLeft: 10,

  },

  subtitle: {
    marginBottom: 30,
    marginLeft: 10,
    marginTop: 8
  },
  forgetPass: {

    flexDirection: 'row',
    justifyContent: "flex-end"

  },
  tinyLogo: {
    height: 50,
    marginTop: 40,
    resizeMode: "contain"
  },
  image: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30

  },
  signin: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20
  }


});

export default memo(SignupScreen);
