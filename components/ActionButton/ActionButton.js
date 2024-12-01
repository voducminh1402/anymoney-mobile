import { View, Text, Pressable, Image } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from './ActionButtonStyle';

export default function ActionButton(props) {
  const { onPress, text, image, style } = props;

  return (
    <Pressable style={[styles.actionButton, style]} onPress={onPress}>
      <View style={styles.actionButton}>
        <Image style={styles.iconSize} source={image} />
        <Text style={styles.actionText}>{text}</Text>
      </View>
    </Pressable>
  );
}

ActionButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  image: PropTypes.any,
  style: PropTypes.object,
};
