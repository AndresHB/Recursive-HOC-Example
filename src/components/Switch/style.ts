import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Style {
  switch: ViewStyle;
  flex: ViewStyle;
  label: TextStyle;
}

const STYLE: Style = StyleSheet.create<Style>({
  switch: {
    flex: 1,
    minHeight: 40,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
  },
});

export default STYLE;
