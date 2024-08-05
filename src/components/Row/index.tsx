import React, {ReactNode} from 'react';
import {View} from 'react-native';

import style from './style';

export interface RowProps {
  children: ReactNode;
}
const Row: React.FC<RowProps> = ({children}) => (
  <View style={style.row}>{children}</View>
);

export default Row;
