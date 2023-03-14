import { StyleSheet, Text, View } from 'react-native';

export function Meals() {
  return (
    <View style={styles.container}>
      <Text>Meals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
