import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  vertical: ViewStyle;
  horizontal: ViewStyle;
}

const STYLE: Style = StyleSheet.create<Style>({
  vertical: {
    width: 1,
    height: '100%',
    backgroundColor: 'black',
  },
  horizontal: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
  },
});

export default STYLE;
