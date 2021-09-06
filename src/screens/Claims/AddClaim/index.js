import React, {memo,useRef} from 'react';
import Button from '../../../components/CustomButtons/Button';
import Container from '../../../components/Layout/container';
import Header from '../../../components/Layout/header';
import Content from '../../../components/Layout/content';
import Footer from '../../../components/Layout/footer';
import RBSheet from "react-native-raw-bottom-sheet";
import {Icon, Divider} from 'react-native-elements';
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import ClaimTab from '../../../components/Misc/ClaimTabs';
import Typography from '../../../components/Typography/Typography';
import Nav from '../../../components/Headers/header';
import SmallButton from "../../../components/CustomButtons/smallButton";
import BSList from "../../../components/List/BottomSheetList"
const showCustomer = ({navigation}) => {
    
    let RBSheetCom=useRef(null)
    
    return(
  <Container>
    <Header>
      <Nav />
    </Header>
    <Content>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: 5,
        }}>

            <View>
        <Typography
          size={24}
          style={{marginLeft: 5}}
          type={'bold'}
          color={'textPrimary'}>
          Add Claim
        </Typography>
        <View style={{flexDirection: 'row',marginLeft:5}}>
          <Icon type="feather" name="calendar" size={18} />
          <Typography size={12} style={{marginLeft: 5}} color={'textSecondary'}>
            26 Jan 2021
          </Typography>
        </View>
        </View>
        <SmallButton 
        onPress={(e)=>RBSheetCom.open()}
        title="Add Claim" type={"outline"}/>


      </View>

     


<View style={styles.tabs}>

<ClaimTab  iconType="material"  iconName="airplanemode-active"  title="Travel" price="₹450"  />



<ClaimTab iconType="material"  iconName="fastfood"  title="Food" price="₹450" />


<ClaimTab iconType="material"  iconName="hotel"  title="Accomodation" price="₹450" />


<ClaimTab iconType="material"  iconName="account-balance-wallet"  title="Daily Allowance" price="₹450" />

<ClaimTab iconType="material"  iconName="local-phone"  title="Telephone" price="₹450" />
<ClaimTab iconType="entypo"  iconName="colours"  title="Miscellaneous" price="₹450" />

</View>





<RBSheet
          ref={ref => {
            RBSheetCom = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
          
            container: {
           
           padding:24,
              flex:1,
              width:"100%",
              borderTopLeftRadius:20,
              borderTopRightRadius:20
            }
          }}
        >

<BSList  iconType="material"  iconName="airplanemode-active"  title="Travel" price="₹450"  />



<BSList iconType="material"  iconName="fastfood"  title="Food" price="₹450" />


<BSList iconType="material"  iconName="hotel"  title="Accomodation" price="₹450" />


<BSList iconType="material"  iconName="account-balance-wallet"  title="Daily Allowance" price="₹450" />

<BSList iconType="material"  iconName="local-phone"  title="Telephone" price="₹450" />
<BSList iconType="entypo"  iconName="colours"  title="Miscellaneous" price="₹450" />

            </RBSheet>



    </Content>












    
    <Footer>

        <Button style={{margin:24}} title="Submit Claim"/>
    </Footer>
  </Container>
);}

const styles = StyleSheet.create({
  infoCard: {
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
  },
  infoChild: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  border: {
    borderLeftWidth: 2,
    borderColor: '#e2e2e2',
  },

  addCust: {
    lineHeight: 40,
    marginLeft: 70,
  },
  table: {
    margin: 16,
    marginTop: 8,
    marginBottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#E0E0E0',
    padding: 8,
    paddingLeft: 12,
  },
  row: {
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
  },
  tabs:{
      marginTop:32
  }
});
export default memo(showCustomer);
