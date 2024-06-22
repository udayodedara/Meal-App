import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle = (props: SubtitleProps) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{props.children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
});
