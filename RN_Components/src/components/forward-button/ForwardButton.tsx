import React, { forwardRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { styles } from './forwardButton-styles';

const ForwardButton = forwardRef(({ progress }, ref) => {
    const handlePress = () => {
        if (progress && ref && ref.current) {
            ref.current.seek(parseInt(progress.currentTime + 10));
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={handlePress}>
            <Icon name="skip-forward" size={30} />
            </TouchableOpacity>
        </View>
    );
});

export default ForwardButton;