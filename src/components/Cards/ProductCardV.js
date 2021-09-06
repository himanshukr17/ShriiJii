import React from "react";
import { ThemeProvider } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import Typography from "../Typography/Typography";
import IconButton from "../CustomButtons/IconButton";
import AddButton from "../CustomButtons/smallButton";
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import { theme } from "../../config/theme";
const CustomButton = (props) => {
  let { sourceImage } = props;

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <View style={styles.section}>
          <ImageBackground
            source={sourceImage}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              justifyContent: "center",
            }}
          ></ImageBackground>
        </View>

        <View style={styles.section2}>
          <View>
          <Typography bold size={14}>
            Egg Pasta
          </Typography>
          <Typography type="light" size={10} color="textSecondary">
            30gm , Price
          </Typography>
          </View>
          <View style={styles.bottomAction}>
            <Typography type="bold" size={14} style={{ marginTop: 10 }}>
              $12.45
            </Typography>

            <View style={styles.ActionButton}>
              <AddButton title="Add" style={{ width: "100%" }} />
            </View>
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,

    aspectRatio: 3,
    flexDirection: "row",

    borderColor: "#e2e2e2",
  },
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  ActionButton: {
    marginRight:20, 
  },
  bottomAction: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section2: {
    flex: 2,
    padding: 10,
    justifyContent: "space-between"
  
  },
});

CustomButton.defaultProps = {
  sourceImage: null,
};

export default CustomButton;
