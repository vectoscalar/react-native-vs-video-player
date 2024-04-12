import React from 'react'
import { TouchableOpacity } from 'react-native'
import Orientation from 'react-native-orientation-locker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Spacing } from '@theme'

interface IFullScreenProps {
  fullscreen: boolean
  setFullscreen: (fullscreen: boolean) => void
}

const FullScreen = (props: IFullScreenProps) => {
  const { fullscreen, setFullscreen } = props
  return (
    <TouchableOpacity
      onPress={() => {
        if (fullscreen) {
          Orientation.lockToPortrait()
        } else {
          Orientation.lockToLandscape()
        }
        setFullscreen(!fullscreen)
      }}>
      <Icon name={!fullscreen ? 'fullscreen' : 'fullscreen-exit'} size={Spacing.space_30} />
    </TouchableOpacity>
  )
}

export default FullScreen
