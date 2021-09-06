import React from 'react'
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Nav from "../../components/Headers/header"
import Content from '../../components/Layout/content';
import Typography from '../../components/Typography/Typography';
import {View} from 'react-native';
import InputField from "../../components/CustomInputs/InputField";
import TextInput from '../../components/CustomInputs/PasswordField';
import Footer from '../../components/Layout/footer';
import Button from '../../components/CustomButtons/Button';


export default function Changepassword() {
    return (
      <Container>
        <Header>
        <Nav/>
        </Header>
        <Content>
        <View style={{marginTop:'40%'}}>
        <Typography size={24} type="extraBold" >Reset Password</Typography>
        <View style={{marginTop:20}}>
        <InputField placeholder="Current Password"/>
        <TextInput placeholder="New Password"/>
        <TextInput placeholder="Confirm Password"/>
        </View>
        </View>
        </Content>
     <Footer actionButton>
         <Button title="Reset Password" />
     </Footer>
      </Container>
    )
}
