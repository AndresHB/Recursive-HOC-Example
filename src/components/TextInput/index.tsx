import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextInput as NativeTextInput,
} from 'react-native';

import style from './style';

const NOTHING = () => () => {};

export interface TextInputProps {
  id: string;
  label: string;
  value: string;
  style?: StyleProp<ViewStyle>;
  setValue: (id: string) => (text: string) => void;
}
const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  value,
  setValue = NOTHING,
  style: styleProp = {},
}) => {
  useEffect(() => {
    console.log('🚀 ~ MOUNT ~ TextInput:', id);

    return () => console.log('🚀 ~ UNMOUNT ~ TextInput:', id);
  }, []);

  console.log('🚀 ~ RENDER ~ TextInput:', id);

  return (
    <View style={[style.container, styleProp]}>
      <Text style={style.label}>{label}</Text>
      <NativeTextInput
        value={value}
        style={style.input}
        onChangeText={setValue(id)}
      />
    </View>
  );
};

export default React.memo(TextInput);
