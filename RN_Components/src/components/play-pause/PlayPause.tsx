import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { styles } from './playPause-styles';

interface PlayPauseProps {
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  paused: boolean;
}

const PlayPause = ({ setPaused, paused }) => {
  const handlePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePlayPause}>
        {paused ? (
          <Icon name='play-circle' size={30} />
        ) : (
          <Icon name='pause-circle' size={30} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PlayPause;