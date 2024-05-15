import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import {
  BORDERRADIUS,
  COLORS,
  FONTSIZE,
  SPACING,
} from "../theme/theme";
import {
  Feather,
} from "@expo/vector-icons";

const InputHeader = (props: any) => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        onChangeText={(textInput) => setSearchText(textInput)}
        placeholder="Search your movies...."
        placeholderTextColor={COLORS.WhiteRGBA32}
        value={searchText}
      />
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => props.searchFunction(searchText)}
      >
        <Feather name="search" size={FONTSIZE.size_20} color={COLORS.Orange} />
      </TouchableOpacity>
    </View>
  );
};

export default InputHeader;

const styles = StyleSheet.create({
  inputBox: {
    display: "flex",
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_24,
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA15,
    borderRadius: BORDERRADIUS.radius_25,
    flexDirection: "row",
    
  },
  textInput: {
    width: "90%",
    fontFamily: "sans-serif",
    fontSize: FONTSIZE.size_14,
    color: COLORS.WhiteRGBA32,
  },
  searchIcon: {
    alignItems: "center",
    justifyContent: "center",
    padding: SPACING.space_10,
  },
});
