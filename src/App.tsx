import { styled } from '@mui/material/styles';
import Header from './Components/Headers';
import { useEffect, useState } from 'react';
import TaskContainer from './Components/TaskContainer';
import background from './assets/background.jpg'
// Define a styled component using MUI's styled API
const AppContainer = styled('div')({
  background: `url(${background}) no-repeat center`,
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center', 
  minHeight: '100vh', 
  minWidth: '100vw', 
  textAlign: 'center',
  padding: '20px',
  boxSizing: 'border-box', 
  placeItems: 'center'
});

function App() {

  
  const [userName, setUserName] = useState<string>(""); 
  
  useEffect(()=> {
    const name = prompt("What's your name?"); 
    if (name== "" || name == null ) { 
      setUserName("X");
    }
    else{
      setUserName(name)
    }
  }, []);
  
  return (
    <AppContainer>
      <Header userName={userName}/>
      <TaskContainer/>
    </AppContainer>
  );
}

export default App;