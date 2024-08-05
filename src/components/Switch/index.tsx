import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  Switch as NativeSwitch,
} from 'react-native';

import style from './style';

const NOTHING = () => () => {};
const TRACK_COLOR = {false: '#FFA500', true: '#003366'};

export interface SwitchProps {
  id: string;
  label: string;
  value: boolean;
  style: StyleProp<ViewStyle>;
  setValue: (id: string) => (value: boolean) => void;
}
const Switch: React.FC<SwitchProps> = ({
  id,
  label,
  value,
  setValue = NOTHING,
  style: styleProp = {},
}) => {
  useEffect(() => {
    console.log('🚀 ~ MOUNT ~ Switch:', id);

    return () => console.log('🚀 ~ UNMOUNT ~ Switch:', id);
  }, []);

  console.log('🚀 ~ RENDER ~ Switch:', id);

  return (
    <View style={[style.switch, styleProp]}>
      <View style={style.flex}>
        <Text style={style.label}>{label}</Text>
      </View>
      <NativeSwitch
        value={value}
        thumbColor="#FFFFFF"
        trackColor={TRACK_COLOR}
        onValueChange={setValue(id)}
        ios_backgroundColor={value ? '#003366' : '#FFA500'}
      />
    </View>
  );
};

export default React.memo(Switch);
