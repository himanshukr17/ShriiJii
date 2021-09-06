import React , {useState} from 'react'
import {Text, View, StyleSheet} from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import Typography from "../Typography/Typography";
import { Icon } from 'react-native-elements'
export default function Accordian(props) {

    let [open,setOpen]=useState(false)
    return (
        <Collapse
        onToggle={(isCollapsed)=>setOpen(isCollapsed)}
        >
        <CollapseHeader>
          <View style={styles.accordianHeader}>
              <View>
          <Typography size={14}   type={"semiBold"}>{props.title}</Typography>
          </View>

          <View>
         {open? <Icon name={"keyboard-arrow-down"} type="material"/>:<Icon name={"keyboard-arrow-right"} type="material"/>}
          </View>


          </View>
        </CollapseHeader>
        <CollapseBody>
        <View style={styles.collapseBody}>
            {props.children}
      
          </View>
        </CollapseBody>
    </Collapse>
    )
}

const styles = StyleSheet.create({
    accordianHeader:{
        flex:1,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
padding:14,
paddingLeft:0,
borderTopWidth:1,
borderTopColor:"rgba(226,226,226,0.7)"
    },
    collapseBody:{
        paddingBottom:10
      },
})
