import { Spacing } from '@theme'
import React, { forwardRef } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface IBackwardButtonProps {
  progress?: {
    currentTime: number
  }
}

const BackwardButton = forwardRef((props: IBackwardButtonProps, ref) => {
  const { progress } = props
  const handlePress = () => {
    if (progress) {
      ref.current.seek(parseInt(progress.currentTime - 10))
    }
  }
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Icon name="skip-backward" size={Spacing.space_30} />
      </TouchableOpacity>
    </View>
  )
})

export default BackwardButton
