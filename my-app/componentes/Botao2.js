import React, { useState } from 'react';
import { Button, View } from 'react-native';

const App = () => {
  const [buttonText, setButtonText] = useState('Clique aqui');
  const [buttonFunction, setButtonFunction] = useState(() => () => console.log('Botão clicado'));

  const handleButtonClick = () => {
    console.log('Botão clicado');
  };

  const handleButtonChange = () => {
    setButtonText('Novo texto do botão','Botão clicado');
    setButtonFunction(() => handleButtonClick);
  };

  return (
    <View>
      <Button title={buttonText} onPress={buttonFunction} />
      <Button title="Alterar botão" onPress={handleButtonChange} />
    </View>
  );
};

export default App;