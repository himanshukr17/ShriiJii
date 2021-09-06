import React from "react";
import { Button, ThemeProvider } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import Typography from "../Typography/Typography";
import IconButton from "../CustomButtons/IconButton";
import Sbutton from "../CustomButtons/smallButton";
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import { theme } from "../../config/theme";
const CustomButton = (props) => {
  let { sourceImage } = props;

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>

          <View style={styles.SmallButton} >
        <View
          style={{
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            iconColor={theme.colors.textPrimary}
            backgroundColor={"#fff"}
            iconName={"home"}
          
            text={"Shop"}
            padding={0}
            iconSize={20}
          />
        </View>

        <View
          style={{
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            iconName="shopping-cart"
            iconType="feather"
            iconColor={theme.colors.textPrimary}
            backgroundColor={"#fff"}
            text={"Cart"}
            padding={0}
            iconSize={20}
          />
        </View>
        </View>

<View style={styles.CheckoutButton}>
<Sbutton
title={"Checkout"}

/>
</View>

      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    elevation: 18,
    paddingTop: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  ButtonStyle: {
    flex: 1,
  },
  SmallButton:{
      flexDirection: "row",
      flex:1,
      justifyContent:"space-around",
  },
  CheckoutButton:{
    flexDirection: "row",
    flex:2,
    paddingRight:20,
    justifyContent:"flex-end",
  }
});

CustomButton.defaultProps = {
  sourceImage: null,
};

export default CustomButton;
