import React from 'react'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import {connect} from "react-redux"

export const SLIDER_WIDTH = Dimensions.get('window').width + 85
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index },parallaxProps) => {
  return (
    <View>
    <ParallaxImage
     containerStyle={styles.imageContainer}
     style={styles.image}
     parallaxFactor={0.4}
     {...parallaxProps}
/>
    <View style={styles.container} key={index}>
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#74cd79',
    borderRadius: 20,
    width: ITEM_WIDTH,
    height:180,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 100,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem