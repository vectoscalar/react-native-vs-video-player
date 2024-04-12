import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Spacing } from '@theme'
import { downloadFile } from '@utils'
import { urls } from '@constants'

const DownloadButton = () => {
  return (
    <TouchableOpacity onPress={() => downloadFile(urls.low)}>
      <Icon name="download" size={Spacing.space_32} />
    </TouchableOpacity>
  )
}

export default DownloadButton
