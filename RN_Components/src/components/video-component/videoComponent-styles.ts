import { Dimensions, StyleSheet, ViewStyle } from 'react-native'

import { videoHeight, videoWidth } from '@constants'
import { AppColors, Spacing } from '@theme'

interface IStyles {
  container: ViewStyle
  controlContainer: ViewStyle
  onPause: ViewStyle
  buttonsContainer: ViewStyle
  clickedContainer: ViewStyle
  pipVideo: ViewStyle
  
}
const styles = StyleSheet.create<IStyles>({
  container: {
    top: Spacing.space_0,
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Spacing.space_10,
  },
  onPause: {
    position: 'absolute',
    backgroundColor: AppColors.primary[400],
    opacity: Spacing.space_0,
    justifyContent: 'space-around',
    top: Spacing.space_20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  clickedContainer: {
    height: videoHeight - Spacing.space_40,
    width: videoWidth,
  },
  pipVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 1000, // Adjust width as needed
    height: 500, // Adjust height as needed
    zIndex: 999, // Ensure the video is always on top
  },
})

export default styles
