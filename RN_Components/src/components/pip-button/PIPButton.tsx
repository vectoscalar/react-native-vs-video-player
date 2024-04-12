import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Spacing } from '@theme'

interface IPIPButtonProps {
  pipMode: boolean
  setPIPMode: Function
}
const PIPButton = (props: IPIPButtonProps) => {
  const { pipMode, setPIPMode } = props
  return (
    <TouchableOpacity onPress={() => setPIPMode(!pipMode)}>
      <Icon name="picture-in-picture-bottom-right" size={Spacing.space_32} />
    </TouchableOpacity>
  )
}

export default PIPButton
