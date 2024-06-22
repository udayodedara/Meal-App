import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ListProps {
  data: [];
}

const List = (props: ListProps) => {
  const {data} = props;

  return data?.map((dataPoint: string) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text key={dataPoint} style={styles.listText}>
        {dataPoint}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  listText: {
    color: '#351401',
    textAlign: 'center',
  },
});
