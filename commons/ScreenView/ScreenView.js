import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenView({ children }) {
  return <SafeAreaView>{children}</SafeAreaView>;
}

ScreenView.propTypes = {
  children: PropTypes.object,
};
