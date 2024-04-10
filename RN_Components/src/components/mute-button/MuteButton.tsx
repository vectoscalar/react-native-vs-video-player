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
  return (
    <TouchableOpacity onPress={() => setMuted(!muted)}>
      {muted ? (
        <Icon name="volume-x" size={Spacing.space_32} />
      ) : (
        <Icon name="volume-2" size={30} />
      )}
    </TouchableOpacity>
  )
}

export default MuteButton
