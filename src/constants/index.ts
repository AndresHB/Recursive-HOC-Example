import {
  Row,
  Column,
  Switch,
  TextInput,
  VerticalLine,
  HorizontalLine,
} from '../components';

export const COMPONENTS = {
  Row,
  Switch,
  Column,
  TextInput,
  VerticalLine,
  HorizontalLine,
};

export const STRUCTURE = [
  {
    id: 'row',
    component: 'Row',
    children: [
      {
        id: 'name',
        component: 'TextInput',
      },
      {
        id: 'vertical',
        component: 'VerticalLine',
      },
      {
        id: 'surname',
        component: 'TextInput',
      },
    ],
  },
  {
    id: 'horizontal',
    component: 'HorizontalLine',
  },
  {
    id: 'row',
    component: 'Row',
    children: [
      {
        id: 'phone',
        component: 'TextInput',
      },
      {
        id: 'vertical',
        component: 'VerticalLine',
      },
      {
        id: 'email',
        component: 'TextInput',
      },
    ],
  },
  {
    id: 'horizontal',
    component: 'HorizontalLine',
  },
  {
    id: 'direction',
    component: 'TextInput',
  },
  {
    id: 'horizontal',
    component: 'HorizontalLine',
  },
  {
    id: 'row',
    component: 'Row',
    children: [
      {
        id: 'calls',
        component: 'Switch',
      },
      {
        id: 'vertical',
        component: 'VerticalLine',
      },
      {
        id: 'messages',
        component: 'Switch',
      },
    ],
  },
  {
    id: 'horizontal',
    component: 'HorizontalLine',
  },
  {
    id: 'row',
    component: 'Row',
    children: [
      {
        id: 'terms',
        component: 'Switch',
      },
    ],
  },
];
