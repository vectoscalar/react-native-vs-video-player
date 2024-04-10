import React from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import RNFetchBlob from 'rn-fetch-blob'

import { Spacing } from '@theme'

const DownloadButton = () => {
  const downloadFile = async (url: string) => {
    const { fs, config, ios, android } = RNFetchBlob
    const directoryToSaveFile = Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.DownloadDir
    const fileName = 'video.mp4'
    const filePath = `${directoryToSaveFile}/${fileName}`
    try {
      const fileExists = await fs.exists(filePath)
      if (fileExists) {
        await fs.unlink(filePath)
      }
      const configDetails = {
        fileCache: true,
        title: fileName,
        path: filePath,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          mediaScannable: true,
          title: fileName,
          path: filePath,
        },
      }
      const file = await config(configDetails).fetch('GET', url)
      if (Platform.OS === 'ios') {
        ios.openDocument(filePath)
      }
    } catch (error) {
      console.log('Error occurred while downloading file', error)
    }
  }
  return (
    <TouchableOpacity
      onPress={() =>
        downloadFile(
          'https://www.w3schools.com/html/mov_bbb.mp4',
        )
      }>
      <Icon name="download" size={Spacing.space_32} />
    </TouchableOpacity>
  )
}

export default DownloadButton
