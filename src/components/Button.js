import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/buttonStyle';

export default function Button({ title, variant = 'default', onPress }) {
  const styleVariant =
    variant === 'google' ? styles.googleButton : styles.loginButton;
  const textStyle =
    variant === 'google' ? styles.googleButtonText : styles.loginButtonText;
  /* COMENTÁRIO DE URIEL : 
' ? ' é parte do operador ternário
(condição ? valorSeVerdadeiro : valorSeFalso) 
    SE    ?     FAÇA      SENAO:     FAÇA
é uma forma curta de escrever um if / else.*/

  return (
    <TouchableOpacity style={styleVariant} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
