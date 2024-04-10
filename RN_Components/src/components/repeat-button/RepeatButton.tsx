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
    <View>
      <TouchableOpacity onPress={() => setRepeat(!repeat)}>
        {repeat ? (
          <Icon name="repeat" size={Spacing.space_30} />
        ) : (
          <Icon name="repeat-off" size={Spacing.space_30} />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default RepeatButton
