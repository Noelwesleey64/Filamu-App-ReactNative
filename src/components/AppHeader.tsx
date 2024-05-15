import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme';
import { AntDesign } from '@expo/vector-icons';


const AppHeader = (props:any) => {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.iconBG} onPress={() => props.action()}>
            <AntDesign name="closecircleo" style={styles.iconStyle} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{props.header}</Text>
        <View style={styles.emptyContainer}></View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  iconStyle:{
    color:COLORS.White,
    fontSize:FONTSIZE.size_24
  },
  headerText:{
    flex:1,
    fontSize: FONTSIZE.size_20,
    textAlign:'center',
    color:COLORS.White,
  },
  emptyContainer:{
    height:SPACING.space_20*2,
    width:SPACING.space_20*2,
  },
  iconBG:{
    height:SPACING.space_20*2,
    width:SPACING.space_20*2,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:BORDERRADIUS.radius_20,
    backgroundColor:COLORS.Orange
}
});
