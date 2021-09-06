import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography/Typography';
import {theme } from "../../config/theme"
import { StyleSheet, Text, View } from 'react-native';
function Badge(props) {
    return (
        <View style={{backgroundColor:theme.colors[props.color],padding:5,paddingLeft:10,paddingRight:10,borderRadius:8}}>
            <Typography color={"white"} size={8}>{props.text}</Typography>
        </View>
    )
}

Badge.propTypes = {

}

const styles = StyleSheet.create({

})

export default Badge

