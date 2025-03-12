import {Stack ,Link } from 'expo-router';
import {Text} from 'react-native';
export default function Details() {
return (
  <>
  <Stack.Screen options={{title : 'Details'}} />
  <Text className="text-xl font-bold color-blue-500 ml-10"> Hello World</Text>
  </> 
    
  );
} 
