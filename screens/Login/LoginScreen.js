import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './LoginStyle';
import ActionButton from '../../components/ActionButton/ActionButton';

const LoginScreen = () => {
  return (
    <View style={styles.background}>
      <Image
        source={require('../../assets/images/login-bg.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.headerText}>AnyMoney</Text>
      <View style={styles.loginArea}>
        <View style={styles.actionButtonArea}>
          <ActionButton
            style={styles.actionButton}
            text="Continue with Google"
            image={require('../../assets/icons/google-icon.png')}
          />
          <ActionButton
            style={styles.actionButton}
            text="Continue with Twitter"
            image={require('../../assets/icons/twitter-icon.png')}
          />
        </View>
        <View style={styles.noteTerms}>
          <Text style={styles.term}>Private Policies</Text>
          <Text style={styles.term}>Term of Service</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
