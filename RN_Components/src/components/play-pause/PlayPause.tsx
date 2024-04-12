import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Spacing } from '@theme'

interface IPlayPauseProps {
  setPaused: (paused: boolean) => void
  paused: boolean
}

const PlayPause = (props: IPlayPauseProps) => {
  const { setPaused, paused } = props
  const handlePlayPause = () => {
    setPaused(!paused)
  }

  return (
    <TouchableOpacity onPress={handlePlayPause}>
      <Icon name={paused ? 'play-circle' : 'pause-circle'} size={Spacing.space_30} />
    </TouchableOpacity>
  )
}

export default PlayPause
