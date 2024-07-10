import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { AppColors, Spacing } from '@theme'

interface IStyles {
  closeButton: ViewStyle
  closeButtonText: TextStyle
  controlContainer: ViewStyle
  modalContainer: ViewStyle
  optionButton: ViewStyle
  optionText: TextStyle
}
const style = StyleSheet.create<IStyles>({
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Spacing.space_10,
  },
  modalContainer: {
    alignItems: 'center',
    flex: Spacing.space_1,
    justifyContent: 'center',
  },
  optionButton: {
    backgroundColor: AppColors.primary[100],
    borderRadius: Spacing.space_10,
    marginVertical: Spacing.space_5,
    paddingHorizontal: Spacing.space_20,
    paddingVertical: Spacing.space_10,
  },
  optionText: {
    fontSize: Spacing.space_16,
  },
  closeButton: {
    backgroundColor: AppColors.tertiary,
    borderRadius: Spacing.space_10,
    marginTop: Spacing.space_10,
    paddingHorizontal: Spacing.space_20,
    paddingVertical: Spacing.space_10,
  },
  closeButtonText: {
    color: AppColors.secondary,
    fontSize: Spacing.space_16,
  },
})

export default style
