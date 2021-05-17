import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const TipoDoencaCronica = () => {
  const [value, setValue] = React.useState('first');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View>
        <Text>Cardio vascular</Text>
        <RadioButton value="cardio" />
      </View>

      <View>
        <Text>Cancer</Text>
        <RadioButton value="Cancer" />
      </View>

      <View>
        <Text>Outras Doenças - Atestado médico</Text>
        <RadioButton value="outrasdoencas" />
      </View>
    </RadioButton.Group>
  );
};

export default TipoDoencaCronica;