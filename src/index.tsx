import React, {useCallback, useState, useRef} from 'react';
import {View, SafeAreaView} from 'react-native';
import getRecursiveHOC from 'get-recursive-hoc';

import style from './style';
import {STRUCTURE, COMPONENTS} from './constants';

interface FORM_STATE {
  name: string;
  surname: string;
  phone: string;
  email: string;
  direction: string;
  calls: boolean;
  messages: boolean;
  terms: boolean;
}

const INITIAL_STATE: FORM_STATE = {
  name: '',
  phone: '',
  email: '',
  surname: '',
  calls: false,
  terms: false,
  direction: '',
  messages: false,
};

function App(): React.JSX.Element {
  const [state, setState] = useState<FORM_STATE>(INITIAL_STATE);

  const Form = useRef(
    getRecursiveHOC({structure: STRUCTURE, components: COMPONENTS}),
  ).current;

  console.log('🚀 ~ App ~ state:', state);

  const onSetState = useCallback(
    (key: string, value: string | boolean) =>
      setState(old => ({...old, [key]: value})),
    [],
  );

  const onSetTextValue = useCallback(
    (key: string) => (value: string) => onSetState(key, value),
    [],
  );

  const onSetBoolValue = useCallback(
    (key: string) => (value: boolean) => onSetState(key, value),
    [],
  );

  return (
    <SafeAreaView style={style.app}>
      <View style={style.form}>
        <Form
          // This are props specified by "component".
          switchProps={{setValue: onSetBoolValue}} // component: 'Switch' => switchProps
          textInputProps={{setValue: onSetTextValue}} // component: 'TextInput' => textInputProps
          // This are props specified by "id".
          name={{
            label: 'Name',
            style: style.halfInput,
            value: state.name,
          }}
          surname={{
            label: 'Surname',
            value: state.surname,
            style: style.halfInput,
          }}
          phone={{
            label: 'Phone',
            value: state.phone,
            style: style.halfInput,
          }}
          email={{
            label: 'Email',
            style: style.halfInput,
            value: state.email,
          }}
          direction={{label: 'Direction', value: state.direction}}
          calls={{label: 'Do you agree to receive calls?', value: state.calls}}
          messages={{
            label: 'Do you agree to receive messages?',
            value: state.messages,
          }}
          terms={{
            value: state.terms,
            label: 'Do you accept the terms and conditions?',
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
