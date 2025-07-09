import '../global.css';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        router.replace('dashboard'); // ✅ Auto-login
      } else {
        router.replace('login');
      }
      setLoading(false);
    };

    checkLogin();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return <View />;
}

