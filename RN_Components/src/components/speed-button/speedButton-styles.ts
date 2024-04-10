import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { AppColors, Spacing } from '@theme'

interface SpeedButtonStyles {
  modalContainer: ViewStyle
  optionButton: ViewStyle
  optionText: TextStyle
  closeButton: ViewStyle
  closeButtonText: TextStyle
}

const styles = StyleSheet.create<SpeedButtonStyles>({
  modalContainer: {
    flex: Spacing.space_1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.primary[100],
  },
  optionButton: {
    backgroundColor: AppColors.secondary,
    paddingHorizontal: Spacing.space_20,
    paddingVertical: Spacing.space_16,
    marginVertical: Spacing.space_8,
    borderRadius: Spacing.space_16,
  },
  optionText: {
    fontSize: Spacing.space_16,
  },
  closeButton: {
    backgroundColor: 'red',
    paddingHorizontal: Spacing.space_20,
    paddingVertical: Spacing.space_16,
    marginTop: Spacing.space_16,
    borderRadius: Spacing.space_16,
  },
  closeButtonText: {
    fontSize: Spacing.space_16,
    color: AppColors.secondary,
  },
})

export default styles
