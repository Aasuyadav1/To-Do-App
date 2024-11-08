import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const User = () => {
    const {id} = useLocalSearchParams();
    console.log("todo id is", id)
  return (
    <View>
      <Text>To do - </Text>
      <Text>{id}</Text>
    </View>
  )
}

export default User