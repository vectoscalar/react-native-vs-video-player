import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '@theme'

interface IStyles {
  container: ViewStyle
  controlContainer: ViewStyle
  onPause: ViewStyle
  buttonsContainer: ViewStyle
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
    backgroundColor: "rgba(0,0,0,0.5)" ,
    justifyContent:"space-around", 
    top:20,
  },
  buttonsContainer:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
})

export default styles
