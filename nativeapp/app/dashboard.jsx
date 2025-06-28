import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export default function Dashboard() {

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      router.replace('login');              
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <View>
      <View className=" py-10 bg-slate-200 w-full h-50 ">
          <Text className="text-center text-3xl font-bold">🎉 Welcome to Dashboard  </Text>
            </View>
         <Text  onPress={handleLogout}  className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-5 w-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 absolute right-0 top-3" >✖️</Text>
   
    </View>
  );
}
