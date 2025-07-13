import React, { useState } from 'react';
import { Text, TextInput, View, Switch, Pressable, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import { TailwindProvider } from 'nativewind';

const relays = [
  { id: 1, name: 'Light' },
  { id: 2, name: 'Fan' },
  { id: 3, name: 'Plug' },
  { id: 4, name: 'AC' },
];

function HomeAutomation() {
  const [serverUrl, setServerUrl] = useState('');
  const [saved, setSaved] = useState(false);
  const [state, setState] = useState({1:false,2:false,3:false,4:false});

  const toggle = async (i, val) => {
    const cmd = val ? 'on' : 'off';
    try {
      await axios.get(`${serverUrl}/relay${i}/${cmd}`);
      setState({...state, [i]: val });
    } catch {
      Alert.alert('Error', 'Country-kku reach pannala. Check URL or network.');
    }
  };

  if (!saved) {
    return (
      <View className="flex-1 items-center justify-center bg-white px-6">
        <Text className="text-2xl font-bold mb-4">Enter Server URL:</Text>
        <TextInput
          className="border border-gray-300 w-full px-4 py-2 rounded-lg mb-4"
          placeholder="e.g. https://example.com"
          value={serverUrl}
          onChangeText={setServerUrl}
        />
        <Pressable
          className="bg-blue-500 px-6 py-2 rounded-full"
          onPress={() => setSaved(serverUrl.trim() !== '') || Alert.alert('URL required')}
        >
          <Text className="text-white text-lg">Continue</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-12">
      <Text className="text-3xl font-bold text-center mb-4">Home Automation</Text>
      <Text className="text-center text-gray-500 mb-6">URL: {serverUrl}</Text>
      {relays.map(r => (
        <View key={r.id} className="flex-row justify-between items-center bg-gray-100 p-4 rounded-xl mb-4">
          <Text className="text-lg">{r.name}</Text>
          <Switch
            value={state[r.id]}
            onValueChange={val => toggle(r.id, val)}
          />
        </View>
      ))}
      <Pressable onPress={() => setSaved(false)} className="bg-red-400 px-4 py-2 rounded-full self-center mt-6">
        <Text className="text-white">Change URL</Text>
      </Pressable>
    </ScrollView>
  );
}

