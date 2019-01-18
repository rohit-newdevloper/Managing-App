import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  const { viewStyle, labelStyle, inputStyle } = styles;
  const {
    label,
    secureTextEntry,
    placeholder,
    onChangeText,
    value,
  } = props;

  return (
    <View style={viewStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 40,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
};

export { Input };
