import React from "react";
import { Button, ThemeProvider } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import Typography from "../Typography/Typography";
import IconButton from "../CustomButtons/IconButton";

import { StyleSheet, ImageBackground, Text, View } from "react-native";
import { theme } from "../../config/theme";
const CustomButton = (props) => {
  let { sourceImage } = props;

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <View
          style={{
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            iconColor={theme.colors.textSecondary}
            backgroundColor={"#fff"}
            iconName={"home"}
          
            text={"Home"}
            padding={0}
            iconSize={20}
          />
        </View>

        <View
          style={{
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            iconName="check-square"
            iconType="feather"
            iconColor={theme.colors.textSecondary}
            backgroundColor={"#fff"}
            text={"Claims"}
            padding={0}
            iconSize={20}
          />
        </View>
        <View
          style={{
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <IconButton
            iconName="plus-circle"
            iconType="feather"
            iconColor={theme.colors.textSecondary}
            backgroundColor={"#fff"}
          
            padding={0}
            iconSize={32}
          />
        </View>
        <View
          style={{
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            iconColor={theme.colors.textSecondary}
            backgroundColor={"#fff"}
            text={"Stocklist"}
            padding={0}
            iconName={"clipboard"}
            iconSize={20}
          />
        </View>
        <View
          style={{
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            iconColor={theme.colors.textSecondary}
            backgroundColor={"#fff"}
            text={"Customer"}
            iconName="user"
            padding={0}
            iconSize={20}
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
    justifyContent: "space-around",
  },

  ButtonStyle: {
    flex: 1,
  },
});

CustomButton.defaultProps = {
  sourceImage: null,
};

export default CustomButton;
