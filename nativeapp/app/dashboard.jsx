import { View, Text, Button, Image, TouchableOpacity, ScrollView, SafeAreaView, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import Product from './Product';
import WifiCar from './wifiCar/WifiCar';
import HomeAutomation from './homeAuto/HomeAutomation';


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
              {/* <Button title="Wifi Car" onPress={() => router.push('./wifiCar/WifiCar')} /> */}
              <Pressable  onPress={() => router.push('./homeAuto/HomeAutomation')}>
                 <View className="bg-slate-300 rounded-2xl py-10 px-10 flex justify-center shadow-md p-4 m-2 w-45 " >
                <Text className="text-1xl font-bold" >Home Automation</Text>
              </View>
              </Pressable>

              <Pressable  onPress={() => router.push('./wifiCar/WifiCar')}>
                 <View className="bg-slate-300 rounded-2xl py-10 px-16 flex justify-center shadow-md p-4 m-2 w-45 " >
                <Text className="text-1xl font-bold" >Wifi Car</Text>
              </View>
              </Pressable>
              
         </View>
      </ScrollView>
    </View>
  );
}
