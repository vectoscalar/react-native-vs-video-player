import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { AppColors, Spacing } from '@theme'

interface IStyles {
  mainContainer: ViewStyle
  timer: TextStyle
  slider: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timer: {
    color: AppColors.secondary,
    marginHorizontal: Spacing.space_16,
  },
  slider: {
    width: '60%',
    height: Spacing.space_40,
  },
})
