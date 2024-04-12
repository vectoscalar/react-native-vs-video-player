import React, { forwardRef } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Spacing } from '@theme'

interface IBackwardButtonProps {
  progress?: {
    currentTime: number
  }
}

const ForwardButton = forwardRef((props: IBackwardButtonProps, ref) => {
  const { progress } = props
  const handlePress = () => {
    if (progress && ref && ref.current) {
      ref.current.seek(parseInt(progress.currentTime + 10))
    }
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon name="skip-forward" size={Spacing.space_30} />
    </TouchableOpacity>
  )
})

export default ForwardButton
