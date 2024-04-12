import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Spacing } from '@theme'

interface IRepeatButtonProp {
  repeat: boolean
  setRepeat: Function
}
const RepeatButton = (props: IRepeatButtonProp) => {
  const { repeat, setRepeat } = props
  return (
    <TouchableOpacity onPress={() => setRepeat(!repeat)}>
      <Icon name={repeat ? 'repeat' : 'repeat-off'} size={Spacing.space_30} />
    </TouchableOpacity>
  )
}

export default RepeatButton
