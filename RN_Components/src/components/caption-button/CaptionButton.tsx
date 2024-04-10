import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Spacing } from '@theme'

interface ICaptionButtonProps {
  caption: boolean
  setCaption: Function
  setCaptionDetails: Function
}

const CaptionButton = (props: ICaptionButtonProps) => {
  const { caption, setCaption, setCaptionDetails } = props

  const toggleCaption = () => {
    setCaption(!caption)
    const newCaptionDetails = {
      type: caption ? 'disabled' : 'index',
      value: 0,
    }
    setCaptionDetails(newCaptionDetails)
  }

  return (
    <View>
      <TouchableOpacity onPress={toggleCaption}>
        {caption ? (
          <Icon name="closed-caption" size={Spacing.space_30} />
        ) : (
          <Icon name="closed-caption-outline" size={Spacing.space_30} />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default CaptionButton
