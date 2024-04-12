import { Dimensions } from 'react-native'

export const windowWidth = Dimensions.get('window').width
export const videoWidth = windowWidth
export const aspectRation = 2 / 3
export const videoHeight = videoWidth * aspectRation
export const subTitleUrl =
  'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt'
interface IUrls {
  low: string
  medium: string
  high: string
}
export const urls: IUrls = {
  low: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  medium: 'https://www.w3schools.com/html/mov_bbb.mp4',
  high: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
}

export const qualityOptions = ['low', 'medium', 'high'];
export const speedOptions = [0.5, 1.0, 2.0];
