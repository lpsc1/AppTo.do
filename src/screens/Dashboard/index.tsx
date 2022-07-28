import React, {useState} from 'react';
import {
  Container,
  Header,
  Logo,
  Text,
  TextInput,
  TasksView,
  Head,
  TextSpan,
  ButtonInput,
  ViewInput,
  TitleButton,
} from './styles';

import IconArrow from '../../assets/arrow.png';
import {FlatList, Image} from 'react-native';
import {Tasks} from '../../components/Tasks';

export interface TaskProps {
  name: string;
  id: string;
}

export function Dashboard() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleAddNewTask() {
    const data = {
      id: new Date().getTime().toString(),
      name: newTask,
    };
    setTasks([...tasks, data]);
  }

  function handleRemoveTask(id: string) {
    setTasks(oldState => oldState.filter(
        skill => skill.id !== id
    ));
}


  return (
    <Container>
      <Header>
        <Head>
          <Logo>to.do</Logo>
          <Text>
            Você tem <TextSpan>{tasks.length} tarefas</TextSpan>
          </Text>
        </Head>
      </Header>

      <TasksView>
        <ViewInput>
          <TextInput
            placeholder="Adicione uma tarefa"
            placeholderTextColor="#B2B2B2"
            onChangeText={setNewTask}></TextInput>
          <ButtonInput   onPress={handleAddNewTask}>
            <Image source={IconArrow} />
          </ButtonInput>
        </ViewInput>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Tasks
              name={item.name}
              onPress={() => handleRemoveTask(item.id)}
            />
          )}
        />
      </TasksView>
    </Container>
  );
}
