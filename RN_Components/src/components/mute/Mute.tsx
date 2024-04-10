import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import {styles} from './mute-style'

const Mute = ({muted,setMuted}) => {
    function handleMute(){
        setMuted(!muted);
    }
  return (
    <View style={styles.mainContainer} >
      
      <TouchableOpacity onPress={()=>{handleMute()}} >
        {(!muted)?<Text>Mute</Text>:<Text>Unmute</Text>}
      </TouchableOpacity>

    </View>
  )
}

export default Mute