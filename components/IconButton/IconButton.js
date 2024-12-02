import { View, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from './IconButtonStyle';

export default function IconButton(props) {
  const { onPress, icon, style, color = 'white' } = props;

  return (
    <Pressable style={[styles.iconButtonPress, style]} onPress={onPress}>
      <View style={styles.iconButton}>
        {React.cloneElement(icon, { color })}
      </View>
    </Pressable>
  );
}

IconButton.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.object,
  style: PropTypes.object,
};
