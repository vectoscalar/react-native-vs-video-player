import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Spacing } from '@theme'

interface IMuteButtonProps {
  muted: boolean
  setMuted: Function
}

const MuteButton = (props: IMuteButtonProps) => {
  const { muted, setMuted } = props
  const handlePress = () => {
    setMuted(!muted)
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon name={muted ? 'volume-x' : 'volume-2'} size={Spacing.space_32} />
    </TouchableOpacity>
  )
}

export default MuteButton
