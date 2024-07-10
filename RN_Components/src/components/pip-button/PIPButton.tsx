import React, { useEffect } from 'react'
import { AppState, NativeModules, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Spacing } from '@theme'

interface IPipComponentProps {
  backgroundDetected: boolean
  setBackgroundDetected: (detected: boolean) => void
  pipMode: boolean
  setPipMode: (mode: boolean) => void
}

const PipComponent = (props: IPipComponentProps) => {
  const { backgroundDetected, setBackgroundDetected, pipMode, setPipMode } = props
  const { PipModule } = NativeModules

  useEffect(() => {
    const appstatus = AppState.addEventListener('change', ev => {
      if (ev === 'background') {
        setBackgroundDetected(true)
        PipModule.EnterPipMode()
      } else {
        setBackgroundDetected(false)
      }
    })
    return () => {
      appstatus.remove()
      setBackgroundDetected(false)
    }
  }, [PipModule])

  return (
    <TouchableOpacity
      onPress={() => {
        PipModule.EnterPipMode()
        setPipMode(!pipMode)
      }}>
      <Icon name="picture-in-picture-bottom-right" size={Spacing.space_32} />
    </TouchableOpacity>
  )
}

export default PipComponent
