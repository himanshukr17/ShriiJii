import React from 'react'
import { StyleSheet, Text, View } from "react-native";
 import AppleImage from "../../assets/images/apple.png"
import { SliderBox } from "react-native-image-slider-box";
import {theme} from "../../config/theme"
export default AddProductSlider = () => {
    return (
        <SliderBox
    
        images={[AppleImage,AppleImage]}
        sliderBoxHeight={300}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor={theme.colors.primary}
        inactiveDotColor={theme.colors.textSecondary}
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'contain'}
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: "rgba(128, 128, 128, 0.92)"
        }}
        ImageComponentStyle={{borderRadius: 20, width: '100%', marginTop: 5}}
        imageLoadingColor={theme.colors.primary}
      />
    )
}
