import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { qualityOptions } from '@constants'
import { Spacing } from '@theme'

import style from './qualityButton-styles'

interface IQualityButtonProp {
  setQuality: Function
  showQualityOption: boolean
  setShowQualityOption: Function
}

const QualityButton = (props: IQualityButtonProp) => {
  const { setQuality, showQualityOption, setShowQualityOption } = props
  const setVideoQuality = (pixel: string) => {
    setQuality(pixel)
    setShowQualityOption(false)
  }

  return (
    <View>
      <TouchableOpacity onPress={() => setShowQualityOption(true)}>
        <Icon name="video-image" size={Spacing.space_32} />
      </TouchableOpacity>
      <Modal visible={showQualityOption} transparent={true} animationType="slide">
        <View style={style.modalContainer}>
          {qualityOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={style.optionButton}
              onPress={() => setVideoQuality(option)}>
              <Text style={style.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={style.closeButton} onPress={() => setShowQualityOption(false)}>
            <Text style={style.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default QualityButton
