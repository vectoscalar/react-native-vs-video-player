import React, { forwardRef } from 'react'; 
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { styles } from './backwardButton-styles';

const BackwardButton = forwardRef((props, ref) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (props.progress) {
            ref.current.seek(parseInt(props.progress.currentTime - 10));
          }
        }}>
        <Icon name='skip-backward' size={30}/>
      </TouchableOpacity>
    </View>
  );
});

export default BackwardButton;