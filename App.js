import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const now = new Date
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    const idleTimer = setTimeout(() => {
      setIdle(true)
    }, 100)

    return () => clearTimeout(idleTimer)
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Your local time is {now.toLocaleTimeString('en-US')}</Text>
      {idle ? <Text>Are you still there?</Text> : null}
      
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
});
