import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
        <Icon name="video-image" size={30} />
      </TouchableOpacity>
      <Modal visible={showQualityOption} transparent={true} animationType="slide">
        <View style={style.modalContainer}>
          <TouchableOpacity style={style.optionButton} onPress={() => setVideoQuality('low')}>
            <Text style={style.optionText}>low</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.optionButton} onPress={() => setVideoQuality('medium')}>
            <Text style={style.optionText}>medium</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.optionButton} onPress={() => setVideoQuality('high')}>
            <Text style={style.optionText}>high</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.closeButton} onPress={() => setShowQualityOption(false)}>
            <Text style={style.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default QualityButton
