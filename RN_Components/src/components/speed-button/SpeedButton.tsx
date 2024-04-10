import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Spacing } from '@theme'

import style from './speedButton-styles'

interface ISpeedButtonProps {
  setShowSpeedOptions: Function
  showSpeedOptions: boolean
  handleSpeedChange: (speed: number) => void
}

const SpeedButton = (props: ISpeedButtonProps) => {
  const { setShowSpeedOptions, showSpeedOptions, handleSpeedChange } = props
  return (
    <View>
      <TouchableOpacity onPress={() => setShowSpeedOptions(true)}>
        <Icon name="play-speed" size={Spacing.space_32} />
      </TouchableOpacity>
      <Modal visible={showSpeedOptions} transparent={true} animationType="slide">
        <View style={style.modalContainer}>
          <TouchableOpacity style={style.optionButton} onPress={() => handleSpeedChange(0.5)}>
            <Text style={style.optionText}>0.5x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.optionButton} onPress={() => handleSpeedChange(1.0)}>
            <Text style={style.optionText}>1.0x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.optionButton} onPress={() => handleSpeedChange(2.0)}>
            <Text style={style.optionText}>2.0x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.closeButton} onPress={() => setShowSpeedOptions(false)}>
            <Text style={style.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default SpeedButton
