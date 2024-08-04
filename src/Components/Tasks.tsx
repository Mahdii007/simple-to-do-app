import styled from "@emotion/styled";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Checkbox, IconButton, TextField } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";

interface TaskProps {
  updateTask(id: string, newTitle: string): void;
  taskFinish(id: string, arg1: boolean): void;
  title: string;
  completed: boolean; 
  id: string;
  removeTask: (id: string) => void;
}

const TaskContainer = styled("div")({
  paddingRight: '8px',
  paddingLeft: "10px",
  margin: '7px',
 
  background: 'rgba(255, 255, 255, 0.2)', 
  borderRadius: '50px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
});

function Task(props: TaskProps) {
  const [isEditing, setIsEditing] = useState(false); 
  const [newTitle, setNewTitle] = useState(props.title); 

  // Function to toggle edit mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  // Function to save the updated title
  const handleSaveClick = () => {
    if (newTitle !== '') {
      props.updateTask(props.id, newTitle);
    }
    setIsEditing(false);
  };

  return (
    <TaskContainer style={{ textDecorationLine: props.completed ? "line-through" : 'none' }}>
      <div>
        {/* Use checked instead of defaultChecked */}
        <Checkbox onClick={() => props.taskFinish(props.id, !props.completed)} checked={props.completed} />
        {isEditing ? (
          <TextField
            value={newTitle}
            onChange={handleInputChange}
            onBlur={handleSaveClick} 
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSaveClick(); 
              }
            }}
            autoFocus
            size="small"
            variant="outlined"
            sx={{ backgroundColor: 'white', background: "#e6e6ff" }}
          />
        ) : (
          props.title 
        )}
      </div>
      <div>
        <IconButton onClick={handleEditClick}>
          <EditIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton onClick={() => props.removeTask(props.id)}>
          <DeleteIcon sx={{ color: red[500] }} />
        </IconButton>
      </div>
    </TaskContainer>
  );
}

export default Task;
