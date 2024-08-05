import {StyleSheet, ViewStyle} from 'react-native';

export interface Style {
  column: ViewStyle;
}
const STYLE: Style = StyleSheet.create<Style>({
  column: {
    gap: 16,
  },
});

export default STYLE;
