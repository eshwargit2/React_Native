import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://192.168.250.172:5000/api/auth/login', {
        email: email.trim(),
        password: password.trim()
      });

      await AsyncStorage.setItem('user', JSON.stringify(res.data.user));
      router.replace('dashboard');
    } catch (err) {
      console.log("Login error:", JSON.stringify(err, null, 2)); // 🔍 full error log
      Alert.alert('Error', err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text className="text-3xl font-bold mb-5">Login your Account</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='Enter your Email'
        placeholderTextColor={'white'}
        keyboardType="email-address"
        className="block w-4/5 p-4 ps-10 text-sm mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder='Enter Your Password'
        placeholderTextColor={'white'}
        className="block w-4/5 p-4 mt-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
      <Text
        onPress={handleLogin}
        className="text-white text-center bg-blue-700 w-4/5 font-medium rounded-lg text-sm px-5 py-4 mt-5"
      >
        Login
      </Text>
      <Link href="/register" className='mt-2'>
        Don't have an account? <Text className="font-bold">Register</Text>
      </Link>
    </View>
  );
}
