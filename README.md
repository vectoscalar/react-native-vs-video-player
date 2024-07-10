# react-native-vs-video-player

## Features

- Play/Pause Button: Allows users to start or pause the video playback.
- Progress Bar: Indicates the current position of the video playback and allows users to seek to different parts of the video.
- Time Display: Shows the current playback time and total duration of the video.
- Fullscreen Button: Enables full screen mode for the video player.
- Playback Speed Control: Allows users to adjust the playback speed of the video. (0.5x, 1x, 1.5x, 2x)
- Subtitle/Caption Selection: Allows users to choose from available subtitles or captions for the video.
- Quality/Resolution Selection: Allows users to select the video quality or resolution.
- Skip Forward/Backward Buttons: Allows users to skip forward or backward in the video.
- Loop Button: Enables looping playback of the video.
- Mute Button: Allows users to mute or unmute the audio of the video.
- Download Button: Allows users to download the video.
- Picture-in-Picture (PiP) Mode Button: Enables Picture-in-Picture mode for the video player.
- Background Mode: Allows users to play the video in the background. 

## Example
```
<Video
source: {{uri: ' '}}
resizeMode: 'contain'
rate 
muted
playInBackground
repeat
paused
/>
```

## Props

|Prop |Type |Values |Description
|--- | --- | --- | ---|
|source |string |Url of any video |The specified video plays in the video player
|resizeMode |string |contain/cover/none/stretch |It specifies how the content of the video should be resized to fit in the container
|rate |number |0.5/1/1.5/2 |It specifies the rate at which the video plays.
|muted |boolean |true/false |It specifies whether the video is muted or not.
|playInBackground |boolean |true/false |It specifies whether the video should play in the background or not.
|repeat |boolean |true/false |It specifies whether the video should repeat or not.
|paused |boolean |true/false |It specifies whether the video is paused or not.
