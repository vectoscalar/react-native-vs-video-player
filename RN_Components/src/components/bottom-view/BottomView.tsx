import { View, Text } from 'react-native';
import React, { forwardRef, useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';

import { styles } from './bottomView-styles';

const BottomView = forwardRef(({ progress }, ref) => { 
    const [sliderValue, setSliderValue] = useState(0);

    useEffect(() => {
        if (progress) {
            setSliderValue(progress.currentTime);
        }
    }, [progress]);

    const format = seconds => {
        let mins = parseInt(seconds / 60)
          .toString()
          .padStart(2, '0');
        let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`; // Added semicolon here
    };

    const onSliderValueChange = value => {
        setSliderValue(value);
        ref.current.seek(value);
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.timer}>{format(progress.currentTime)}</Text>

            <Slider
                style={{ width: '60%', height: 40 }}
                minimumValue={0}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                value={sliderValue} 
                onValueChange={onSliderValueChange} // Pass the correct function
            />

            <Text style={styles.timer}>{format(progress.seekableDuration)}</Text>
        </View>
    );
});

export default BottomView;
