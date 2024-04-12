import React from 'react'
import { SafeAreaView } from 'react-native'

import { DefaultTheme } from '@react-navigation/native'

import { VideoComponent } from '@components'
import { AppColors } from '@theme'

import { styles } from './app-styles'

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: AppColors.secondary,
  },
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VideoComponent />
    </SafeAreaView>
  )
}

export default App
