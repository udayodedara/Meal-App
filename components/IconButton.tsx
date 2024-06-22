import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Images from '../assets/icons';

interface IconButtonProps {
  icon: number;
  color: string;
  onPress: () => void;
}

const IconButton = (props: IconButtonProps) => {
  const {onPress, icon = Images.heart, color = 'white'} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.touched}>
      <Image
        source={icon}
        resizeMode="contain"
        style={styles.icon}
        tintColor={color}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  touched: {
    height: 25,
    width: 25,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
});
