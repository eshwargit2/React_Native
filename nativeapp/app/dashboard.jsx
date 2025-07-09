import { View, Text, Button, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import Product from './Product';


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
      <View className=" py-10 bg-slate-300 w-full h-50">
          <Text className="text-center text-3xl font-bold pt-5 ">Welcome to Dashboard </Text>
           <Text  onPress={handleLogout}  className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-10 rounded-50  focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 absolute right-0 top-3" >✖️</Text>
      </View>

      <View>
        <Text className="text-2xl font-bold text-center mt-5">Home Automation</Text>
      </View>
      
      <SafeAreaView className="flex-1 bg-gray-100"></SafeAreaView>
        <ScrollView contentContainerStyle={{padding1:16}}>
            <View className="flex flex-row gap-4 flex-wrap">
              
         </View>
      </ScrollView>
    </View>
  );
}
