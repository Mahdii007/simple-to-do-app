import  { useState } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import { v4 as uuidv4 } from 'uuid';
import { initial_Tasks } from '../utility/data/initailTasks';
import Task from './Tasks';
import AddTask from './addNewTasks';


// Using MUI v5 styled API
const Container = styled(Grid)({
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const TaskList = styled(Grid)({
  backgroundColor: 'rgb(0 0 0 / 62%)',
  color: 'white',
  borderRadius:'20px'
});

const TaskContainer = () => {
  const [tasks, setTasks] = useState(initial_Tasks);

  const addTaskToList = (title: string) => {
    const addTask = { title: title, completed: false, id: uuidv4() };
    setTasks([...tasks, addTask]);
  };
  const removeTask = (id:string) => {
    const updatedTasks = [...tasks].filter((task) => task.id !== id );
    setTasks(updatedTasks);
  };
  const taskFinish = (id: string, check:boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: check } : task
      )
    );
  }; 
  
  const updateTask = (id: string, title:string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: title } : task
      )
    );
  }; 

  return (
    <Container container>
      <Grid item xs={12} sm={8}>
        <AddTask addTaskToList={addTaskToList} />
      </Grid>
      <TaskList item xs={11.8} sm={7.8}>
        {tasks.length === 0  ?
      <div>Create your tasks </div> 
        : tasks.map((task) => (       
          <div key={task.id}>
            <Task
             id={task.id}
            title={task.title} 
            updateTask={updateTask}
            taskFinish={taskFinish}
            completed={task.completed}  
            removeTask={removeTask}/>
          </div>
        ))}
      </TaskList>
    </Container>
  );
};

export default TaskContainer;
