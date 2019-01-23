import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const ListItem = (props) => {
  const { employee } = props;
  const { name } = employee;

  return (
    <CardSection>
      <Text style={styles.titleStyle}>
        {name}
      </Text>
    </CardSection>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default ListItem;
