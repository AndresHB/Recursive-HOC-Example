import React from 'react';
import {View} from 'react-native';

import style from './style';

export interface RowProps {}

export const VerticalLine: React.FC<RowProps> = () => (
  <View style={style.vertical} />
);

export const HorizontalLine: React.FC<RowProps> = () => (
  <View style={style.horizontal} />
);
