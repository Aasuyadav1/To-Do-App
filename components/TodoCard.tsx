import { View, Text } from 'react-native'
import React from 'react'

interface ToDoCardProps {
    title?: string,
    content?: string
}

const TodoCard = ({title='TodoCard',content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut debitis nostrum nulla illo numquam veniam tempora porro quos id consequuntur'}:ToDoCardProps) => {
  return (
    <View className='border-2 p-2 rounded-xl border-primary bg-accent'>
      <Text className='font-semibold text-black text-lg'>{title}</Text>
      <View className='border border-primary/80 mt-2' />
      <Text className='mt-2 text-base line-clamp-3'>{content}</Text>
    </View>
  )
}

export default TodoCard