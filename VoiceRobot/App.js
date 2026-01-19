import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function App() {
  // Use ESP32 IP
  const ws = new WebSocket('ws://192.168.0.100:81');

  ws.onopen = () => console.log("Connected to robot");
  ws.onclose = () => console.log("Disconnected from robot");
  ws.onerror = (e) => console.log("WebSocket error", e);

  const sendCommand = (cmd) => {
    if(ws.readyState === 1) ws.send(cmd.toString());
  };

  return (
    <View style={styles.container}>
      <Button title="Forward" onPress={() => sendCommand(1)} />
      <Button title="Backward" onPress={() => sendCommand(2)} />
      <Button title="Left" onPress={() => sendCommand(3)} />
      <Button title="Right" onPress={() => sendCommand(4)} />
      <Button title="Stop" onPress={() => sendCommand(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
});
