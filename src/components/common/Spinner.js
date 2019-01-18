import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
  const { spinnerStyle } = styles;
  const { size } = props;

  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export { Spinner };
