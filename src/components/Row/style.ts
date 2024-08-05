import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  row: ViewStyle;
}

const STYLE: Style = StyleSheet.create<Style>({
  row: {
    gap: 16,
    flexDirection: 'row',
  },
});

export default STYLE;
