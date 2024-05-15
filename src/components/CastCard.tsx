import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme';


const CastCard = (props:any) => {
  return (
    <View style={[styles.container, props.shouldMarginatedAtEnd ? props.isFirst ? {marginLeft:SPACING.space_24} : props.isLast ? {marginRight:SPACING.space_24} : {} : {}, {maxWidth:props.cardWidth}]}>
      <Image source={{uri:props.imagePath}} style={[styles.cardImage, {width:props.cardWidth}]}/>
      <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
      <Text style={styles.subtitle} numberOfLines={1}>{props.subtitle}</Text>
    </View>
  );
};

export default CastCard;

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  cardImage:{
    aspectRatio:1920/2880,
    borderRadius:BORDERRADIUS.radius_25*4,
  },
  title:{
    alignSelf:'stretch',
    fontSize:FONTSIZE.size_10,
    color:COLORS.White
  },
  subtitle:{
    alignSelf:'stretch',
    fontSize:FONTSIZE.size_10,
    color:COLORS.White
  }
});
