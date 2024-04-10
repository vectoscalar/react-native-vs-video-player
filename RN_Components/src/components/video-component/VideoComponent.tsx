import React, { useRef, useState } from 'react'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import Video, { TextTrackType } from 'react-native-video'

import BackwardButton from '../backward-button/BackwardButton'
import BottomView from '../bottom-view/BottomView'
import CaptionButton from '../caption-button/CaptionButton'
import DownloadButton from '../download-button/DownloadButton'
import ForwardButton from '../forward-button/ForwardButton'
import FullScreen from '../full-screen/FullScreen'
import MuteButton from '../mute-button/MuteButton'
import PIPButton from '../pip-button/PIPButton'
import PlayPause from '../play-pause/PlayPause'
import QualityButton from '../quality-button/QualityButton'
import RepeatButton from '../repeat-button/RepeatButton'
import SpeedButton from '../speed-button/SpeedButton'

import styles from './videoComponent-styles'

const VideoComponent = () => {
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0)
  const [showSpeedOptions, setShowSpeedOptions] = useState(false)
  const [muted, setMuted] = useState(false)
  const [pipMode, setPIPMode] = useState(false)
  const [clicked, setClicked] = useState<boolean>(false)
  const [paused, setPaused] = useState<boolean>(false)
  const [progress, setProgress] = useState<any>(null)
  const [fullscreen, setFullscreen] = useState<boolean>(false)
  const videoRef = useRef<Video>(null)

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed)
    setShowSpeedOptions(false)
  }

  const handlePress = () => {
    setClicked(!clicked)
  }

  const toggleFullScreen = () => {
    setFullscreen(!fullscreen)
  }

  const windowWidth = Dimensions.get('window').width
  const videoWidth = windowWidth
  const aspectRation = 2 / 3
  const videoHeight = videoWidth * aspectRation
  const subTitleUrl = 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt'
  const [repeat, setRepeat] = useState(true)
  interface IUrls {
    low: string
    medium: string
    high: string
  }
  const urls: IUrls = {
    low: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    medium: 'https://www.w3schools.com/html/mov_bbb.mp4',
    high: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
  }

  const [caption, setCaption] = useState<boolean>(false)
  const [captionDetails, setCaptionDetails] = useState<{
    type: 'disabled' | 'index'
    value: number
  }>({
    type: 'disabled',
    value: 0,
  })

  const [quality, setQuality] = useState<'low' | 'medium' | 'high'>('low')
  const [showQualityOption, setShowQualityOption] = useState(false)

  return (
    <>
      <TouchableOpacity style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
          <Video
            source={{
              uri: urls[quality],
            }}
            style={{ height: videoHeight, width: videoWidth }}
            resizeMode="contain"
            rate={playbackSpeed}
            muted={muted}
            playInBackground={true}
            repeat={repeat}
            selectedTextTrack={captionDetails}
            textTracks={[
              {
                title: 'English CC',
                language: 'en',
                type: TextTrackType.VTT,
                uri: subTitleUrl,
              },
            ]}
            paused={paused}
            ref={videoRef}
            onProgress={x => {
              setProgress(x)
            }}
          />
        </TouchableOpacity>

        {clicked && (
          <TouchableOpacity
            style={[{ height: videoHeight - 40, width: videoWidth }, styles.onPause]}
            onPress={handlePress}>
            <FullScreen fullscreen={fullscreen} setFullscreen={toggleFullScreen} />

            <View style={styles.buttonsContainer}>
              <BackwardButton progress={progress} ref={videoRef} />
              <PlayPause paused={paused} setPaused={setPaused} />
              <ForwardButton progress={progress} ref={videoRef} />
            </View>

            <BottomView progress={progress} ref={videoRef} />
          </TouchableOpacity>
        )}

        <View style={styles.controlContainer}>
          <MuteButton muted={muted} setMuted={setMuted} />
          <PIPButton pipMode={pipMode} setPIPMode={setPIPMode} />
          <SpeedButton
            setShowSpeedOptions={setShowSpeedOptions}
            showSpeedOptions={showSpeedOptions}
            handleSpeedChange={handleSpeedChange}
          />
          <DownloadButton />
          <RepeatButton repeat={repeat} setRepeat={setRepeat} />
          <CaptionButton
            caption={caption}
            setCaption={setCaption}
            setCaptionDetails={setCaptionDetails}
          />
          <QualityButton
            setQuality={setQuality}
            showQualityOption={showQualityOption}
            setShowQualityOption={setShowQualityOption}
          />
        </View>
      </TouchableOpacity>
    </>
  )
}

export default VideoComponent
