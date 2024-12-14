import React from 'react';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../styles/CommonStyle';
import { styles } from './BaseScreenStyle';

export default function BaseScreen(props) {
  const { children } = props;
  return (
    <LinearGradient
      style={styles.default}
      colors={[colors.MAIN_ORANGE, colors.MAIN_YELLOW]}
    >
      {children}
    </LinearGradient>
  );
}

BaseScreen.propTypes = {
  children: PropTypes.object,
};
