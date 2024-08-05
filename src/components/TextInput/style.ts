import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  label: TextStyle;
  input: ViewStyle;
}

const STYLE: Style = StyleSheet.create<Style>({
  container: {
    gap: 4,
    paddingVertical: 8,
  },
  label: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 51, 102, 0.25)',
  },
});

export default STYLE;
