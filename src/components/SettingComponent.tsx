import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import { AntDesign , Entypo, FontAwesome   } from '@expo/vector-icons';


const SettingComponent = (props:any) => {
  return (
    <View style={styles.container}>
    <View>
        {props?.icon === 'dollar' ?
        <FontAwesome name={props.icon} style={styles.iconStyle} />
            :
        <AntDesign name={props.icon} style={styles.iconStyle} />
        }
    </View>
    <View style={styles.settingContainer}>
      <Text style={styles.title}>{props.heading}</Text>
      <Text style={styles.subtitle}>{props.subheading}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
    <View style={styles.iconBG}>
      <Entypo name={'chevron-right'} style={styles.iconStyle} />
    </View>
  </View>
  );
};

export default SettingComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: SPACING.space_12,
      },
      settingContainer: {
        flex: 1,
      },
      iconStyle: {
        color: COLORS.White,
        fontSize: FONTSIZE.size_24,
        paddingHorizontal: SPACING.space_20,
      },
      iconBG: {
        justifyContent: 'center',
      },
      title: {
        fontSize: FONTSIZE.size_18,
        color: COLORS.White,
      },
      subtitle: {
        fontSize: FONTSIZE.size_14,
        color: COLORS.WhiteRGBA15,
      },
});
