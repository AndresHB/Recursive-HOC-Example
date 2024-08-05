import React, {ReactNode} from 'react';
import {View} from 'react-native';

import style from './style';

interface ColumnProps {
  children: ReactNode;
}

const Column: React.FC<ColumnProps> = ({children}) => (
  <View style={style.column}>{children}</View>
);

export default Column;
