import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => { setCount(count + 1) }} title="press"
      />
      <View style={styles.Button}>
        <Button
          onPress={() => { setCount(0) }} title="Reset"
        />
        <Text>You have pressed {count} times</Text>
      </View>
      <StatusBar style="auto" />
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
  Button: {
    marginVertical: 2,
    marginBottom: 2
  }
});
