import React, {memo} from 'react';
import {ThemeProvider} from 'react-native-elements';
import SearchField from '../../components/CustomInputs/SearchField';
import Background from '../../components/Background';
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import CustomerSelect from "./CustomerSelect"
import PlantSelect from "./PlantSelect"
import AddSku from "./AddSku"
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../../components/Typography/Typography';
import TextInput from '../../components/CustomInputs/PasswordField';
import IconButton from '../../components/CustomButtons/IconButton';
import {Icon} from 'react-native-elements';
import {theme} from '../../config/theme';
import Nav from '../../components/Headers/header';
import {BlurView} from '@react-native-community/blur';
import PhoneNumberInput from '../../components/CustomInputs/PhoneInput';
import {BoxShadow} from 'react-native-shadow';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import BottomNav from '../../components/BottomNav/Checkout';
import Card from '../../components/Cards/ProductCardH';
import Selector from "../../components/Misc/Selector"
const LoginScreen = ({navigation}) => (
  <Container>
    <Header>
      <Nav
       

    title={"Create Order"}
       
        rightComponent={
          <Typography
         style={{marginRight:15,width:45}}
            size={14}
          
          >
              Cancel
              </Typography>
        }
       
       
      />
    </Header>
    <Content >

   

      <View style={{flex: 1}}>
        <ProgressSteps
         topOffset={16}
          activeStepIconBorderColor={theme.colors.primary}
          completedProgressBarColor={theme.colors.primary}
          completedStepIconColor={theme.colors.primary}
          activeLabelColor={theme.colors.textPrimary}
          labelFontSize={10}
       
          marginBottom={40}
          >
          <ProgressStep label="Select Customer">
            <View style={{alignItems: 'center',flex:1,flexDirection: 'row'}}>
           <CustomerSelect/>

            </View>
          </ProgressStep>
          <ProgressStep label="Select Plant">
            <View style={{alignItems: 'center',flex:1,flexDirection: 'row'}}>

            <PlantSelect/>

            </View>
          </ProgressStep>
          <ProgressStep label="Add Products">
            <View style={{alignItems: 'center',flex:1,flexDirection: 'row'}}>
        <AddSku/>
            </View>
          </ProgressStep>
          <ProgressStep label="Review">
            <View style={{alignItems: 'center'}}></View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </Content>
 
  </Container>
);

const styles = StyleSheet.create({
  ProductList: {
    flex: 1,
  },

  inputView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    lineHeight: 40,
    marginLeft: 10,
    marginTop: 20,
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bottomButton: {
    width: '100%',
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 10,
    alignItems: 'flex-end',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  buttonCard: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  recentProducts: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 45,
    marginLeft: 5,
  },
  recent: {
    marginBottom: 10,
  },
  listFlat: {
    paddingBottom: 100,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default memo(LoginScreen);
