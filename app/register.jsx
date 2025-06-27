import { Text, TextInput, View } from 'react-native'


const register = () => {
  return (
    <View
          style={{
        flex: 1,
        
        alignItems: "center",
        
      }} >
        
      <Text className="text-3xl font-bold mt-60 mb-8 " >Register Your Account</Text>
        <TextInput keyboardType='email-address'  placeholder='Enter Your Email' className="block   w-10/12 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 font-bold dark:focus:border-blue-500" />
        <TextInput  placeholder='Enter Your password' className="block mt-6 w-10/12 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 font-bold dark:focus:border-blue-500" />
        
    
    </View>
  )
}

export default register