import { View, Text } from 'react-native'
import React from 'react'
import { useRouter, usePathname } from 'expo-router'
import { Link } from 'expo-router'

interface ToDoCardProps {
    title?: string,
    content?: string,
    id?: string
}

const TodoCard = ({title='TodoCard',content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut debitis nostrum nulla illo numquam veniam tempora porro quos id consequuntur', id='4'}:ToDoCardProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleRouteChange  = () => {
    if(!id){
      return
    }

    if(pathname.startsWith('/todo')){
      router.setParams({ id: id.toString() })
    }else {
      router.push(`/todo/${id}`)
    }
 
  }
  return (
    <View className='border p-2 rounded-xl border-primary bg-accent shadow-sm'>
      <Text onPress={handleRouteChange}  className='font-semibold hover:text-primary text-black text-lg line-clamp-1'>{title}</Text>
      <View className='border border-primary/80 mt-2' />
      <Text className='mt-2 text-base line-clamp-3'>{content}</Text>
    </View>
  )
}

export default TodoCard