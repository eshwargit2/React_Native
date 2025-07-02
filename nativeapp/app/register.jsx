
import axios from 'axios';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';


const register = () => {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleRegister = async () => {
  try {
    const res = await axios.post('http://192.168.202.172:5000/api/auth/register', {
      name,
      email,
      password,
    });

    console.log("Register response:", res.data);
    Alert.alert('Success', res.data.message);
    router.push('login');
  } catch (err) {
    console.log("Register error:", err.message);
    if (err.response?.data?.message) {
      Alert.alert('Error', err.response.data.message);
    } else {
      Alert.alert('Error', 'Something went wrong. Try again.');
    }
  }
};


  return (
     <View   style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",      
      }}>
        <Text className="text-4xl pb-9 font-bold ">Register Your Account</Text>
     
      <TextInput value={name} placeholder='Enter Your Name' placeholderTextColor={'white'}  onChangeText={setName}  className="block w-4/5 p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
    
      <TextInput value={email} onChangeText={setEmail} placeholder='Enter your Email' placeholderTextColor={'white'} keyboardType="email-address"  className="block w-4/5 p-4 ps-10 text-sm mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      
      <TextInput value={password} placeholder='Enter Your Password' placeholderTextColor={'white'}  onChangeText={setPassword} secureTextEntry  className="block w-4/5 p-4 mt-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"  />

      <Text  onPress={handleRegister}  className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-5 w-4/5 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Register</Text>
      
      <Link href="/login" className='mt-2'>Already have a account? <Text className="font-bold" >Login</Text>  </Link>
    </View>
  )
}

export default register