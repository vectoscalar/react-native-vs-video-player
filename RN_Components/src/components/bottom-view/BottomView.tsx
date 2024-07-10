import React, { forwardRef, useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import Slider from '@react-native-community/slider'

import { AppColors } from '@theme'
import { format } from '@utils'

import { styles } from './bottomView-styles'

interface IBackwardButtonProps {
  progress?: {
    currentTime: number
  }
}

const BottomView = forwardRef((props: IBackwardButtonProps, ref) => {
  const { progress } = props
  const [sliderValue, setSliderValue] = useState<Number>(0)
  useEffect(() => {
    if (progress) {
      setSliderValue(progress.currentTime)
    }
  }, [progress])

  const onSliderValueChange = (value: Number) => {
    setSliderValue(value)
    ref.current.seek(value)
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.timer}>{format(progress.currentTime)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={progress.seekableDuration}
        minimumTrackTintColor={AppColors.secondary}
        maximumTrackTintColor={AppColors.primary[700]}
        value={sliderValue}
        onValueChange={onSliderValueChange}
      />
      <Text style={styles.timer}>{format(progress.seekableDuration)}</Text>
    </View>
  )
})

export default BottomView
