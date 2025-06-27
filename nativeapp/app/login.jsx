import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post(' http://localhost:5000/api/auth/login', {
        email,
        password
      });
      Alert.alert('Success', `Welcome ${res.data.user.name}`);
      router.replace('/dashboard'); // ✅ Redirect to dashboard
    } catch (err) {
      Alert.alert('Login Failed', err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        style={{ borderBottomWidth: 1 }}
      />
      <Text>Password</Text>
      <TextInput
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={{ borderBottomWidth: 1 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
