import React from 'react'
import { Text } from 'react-native'

export default function header(props) {
  return (
    <>
    <Text>
        Hello I am a {props.name}
    </Text>
    </>
  )
}
