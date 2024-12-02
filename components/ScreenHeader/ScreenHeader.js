import React from 'react';
import { styles } from './ScreenHeaderStyle';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export default function ScreenHeader(props) {
  const { children } = props;
  return <View style={styles.default}>{children}</View>;
}

ScreenHeader.propTypes = {
  children: PropTypes.object,
};
