import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  app: ViewStyle;
  form: ViewStyle;
  halfInput: ViewStyle;
}

const STYLE: Style = StyleSheet.create<Style>({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  form: {
    padding: 16,
    width: '95%',
    elevation: 4,
    borderRadius: 8,
    shadowRadius: 2.62,
    shadowOpacity: 0.23,
    shadowColor: 'black',
    backgroundColor: '#F0F0F0',
    shadowOffset: {width: 0, height: 0},
  },
  halfInput: {
    flex: 1,
  },
});

export default STYLE;
