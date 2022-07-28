import React, {useState} from 'react';
import {Container, TaskText, Button, TrashStyle} from './styles';

import {Image, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import IconBox from '../../assets/box.png';
import IconTrash from '../../assets/trash.png';
import IconActive from '../../assets/active.png';
interface TaskPropos extends TouchableOpacityProps {
  name: string;
}
export function Tasks({name, ...rest}: TaskPropos) {
  const [isActive, setIsActive] = useState(true);

  function handleActive() {
    setIsActive(!isActive);
  }

  return (
    <Container isActive={isActive}>
      
        <Button  onPress={handleActive}>
          <Image  source={isActive ? IconBox : IconActive} />
        </Button>
    
        <TaskText isActive={isActive}>{name}</TaskText>
      
      <TrashStyle>
        <TouchableOpacity {...rest}>
          <Image source={IconTrash} />
        </TouchableOpacity>
      </TrashStyle>
    </Container>
  );
}
