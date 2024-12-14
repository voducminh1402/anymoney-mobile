import React from 'react';
import { styles } from './ContainerStyle';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export default function Container(props) {
  const { children } = props;
  return <View style={styles.default}>{children}</View>;
}

Container.propTypes = {
  children: PropTypes.object,
};
