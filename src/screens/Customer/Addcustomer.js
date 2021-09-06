import React from 'react';
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import Nav from '../../components/Headers/header';
import {Text, View, StyleSheet} from 'react-native';
import Typography from '../../components/Typography/Typography';
import Button from '../../components/CustomButtons/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneNumberInput from '../../components/CustomInputs/PhoneInput';
import InputField from '../../components/CustomInputs/InputField';
export default function Addcustomer() {
  return (
    <Container>
      <Header>
        <Nav title="Add customer" />
      </Header>
      <Content>
    
        <View style={styles.textFields}>
          <InputField label="Name of farmer*" placeholder="Name here" />
          <InputField label="Father name*" placeholder="Name here" />
          <InputField
            label="Date of birth*"
            placeholder="Name here"
            rightIcon={
              <Icon
                name="calendar-month"
                type="materialCommunityIcons"
                size={20}
              />
            }
          />
          <InputField label="Mobile*" placeholder="Name here" />
          <InputField label="Village*" placeholder="Name here" />
          <InputField label="Taluka*" placeholder="Name here" />
          <View style={styles.linear}>
            <View style={styles.linearChild}>
              <InputField label="Pincode*" placeholder="Name here" />
            </View>
            <View style={styles.linearChild}>
              <InputField label="District*" placeholder="Name here" />
            </View>
          </View>

          <InputField label="State" placeholder="Name here" />
        </View>
      </Content>
      <Footer actionButton>
        <Button title="Save" />
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  textFields: {
    marginTop: 30,
  },
  linear: {
    flexDirection: 'row',
    flex: 1,
    width:"100%",
  
  },
  linearChild:{
  
      flexDirection:"row",
  
      flex:1
  }
});
