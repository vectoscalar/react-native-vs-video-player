import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { AppNavigator } from '@navigation'
import { AppColors } from '@theme'

import { styles } from './app-styles'
import VideoComponent from './src/components/video-component/VideoComponent'
import VideoCard from './src/components/video-card/VideoCard'

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
      {/* <NavigationContainer theme={AppTheme}>
        <AppNavigator />
      </NavigationContainer> */}
      <VideoComponent /> 



    </SafeAreaView>
  )
}

export default App
