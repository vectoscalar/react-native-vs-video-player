import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Orientation from 'react-native-orientation-locker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { styles } from './fullScreen-styles'

const FullScreen = ({ fullscreen, setFullscreen }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (fullscreen) {
            Orientation.lockToPortrait()
          } else {
            Orientation.lockToLandscape()
          }
          setFullscreen(!fullscreen)
        }}>
        {!fullscreen ? (
          <Icon name="fullscreen" size={30} />
        ) : (
          <Icon name="fullscreen-exit" size={30} />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default FullScreen