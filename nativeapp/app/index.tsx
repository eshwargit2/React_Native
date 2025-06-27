import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import '../global.css'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Text className="text-5xl">React Native App</Text>
      <Link href={"/register"} className="text-white bg-gradient-to-r from-teal-200 to-lime-200hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl  py-4 px-20 me-2 mb-2 dark:bg-blue-600 mt-6 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >LOGIN</Link>
      {/* <Button title="Login"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" /> */}


    </View>
  );
}
