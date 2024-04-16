import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import Video, { TextTrackType } from 'react-native-video'

import { subTitleUrl, urls, videoHeight, videoWidth } from '@constants'

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
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0)
  const [showSpeedOptions, setShowSpeedOptions] = useState<boolean>(false)
  const [muted, setMuted] = useState<boolean>(false)
  const [pipMode, setPIPMode] = useState<boolean>(false)
  const [clicked, setClicked] = useState<boolean>(false)
  const [paused, setPaused] = useState<boolean>(false)
  const [progress, setProgress] = useState<Number>(0)
  const [fullscreen, setFullscreen] = useState<boolean>(false)
  const [repeat, setRepeat] = useState<boolean>(true)
  const [caption, setCaption] = useState<boolean>(false)
  const [captionDetails, setCaptionDetails] = useState<{
    type: 'disabled' | 'index'
    value: number
  }>({
    type: 'disabled',
    value: 0,
  })
  const [quality, setQuality] = useState<'low' | 'medium' | 'high'>('low')
  const [showQualityOption, setShowQualityOption] = useState<boolean>(false)
  const [backgroundDetected, setBackgroundDetected] = useState<boolean>(false)
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

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
          <Video
            source={{
              uri: urls[quality],
            }}
            style={
              fullscreen
                ? { height: '100%', width: '100%' }
                : { height: videoHeight, width: videoWidth }
            }
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
            style={
              fullscreen
                ? [styles.clickedContainer, styles.onPause, { height: '100%', width: '100%' }]
                : [styles.clickedContainer, styles.onPause]
            }
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
          {!backgroundDetected && (
            <PIPButton
              backgroundDetected={backgroundDetected}
              setBackgroundDetected={setBackgroundDetected}
              pipMode={pipMode}
              setPipMode={setPIPMode}
            />
          )}
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
      </View>
    </>
  )
}

export default VideoComponent
