import { Platform } from 'react-native'

import RNFetchBlob from 'rn-fetch-blob'

export const downloadFile = async (url: string) => {
  const { fs, config, ios } = RNFetchBlob
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

export const format = seconds => {
  let mins = parseInt(seconds / 60)
    .toString()
    .padStart(2, '0')
  let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0')
  return `${mins}:${secs}`
}
