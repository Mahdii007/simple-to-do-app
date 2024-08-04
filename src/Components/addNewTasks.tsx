/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconButton, styled, TextField } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add'
import { amber } from '@mui/material/colors';

const AddContainer = styled('div')({
        padding: '0px 10px 10px 10px',
        borderRadius: '20px',
        // background: `white`,
        display: 'flex',
        alignItems: 'center'
});


export default function AddTask(props: any) {
    const [newTaskText, setNewTaskText] = useState<string>("");
    const handleIconAdd = () => {
        if(newTaskText.length > 0){
             props.addTaskToList(newTaskText);
             setNewTaskText("")
         }
   }
    const handleAddingTask = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13 && newTaskText.length > 0 ) {
            props.addTaskToList(newTaskText);
            setNewTaskText("")
        }
    }
    console.log("hey")
    return (
        <AddContainer>
            <TextField  
                margin={'normal'}
                fullWidth
                onChange={e => setNewTaskText(e.target.value)}
                value={newTaskText}
                label={"What's on your mind today?"}
                onKeyPress={handleAddingTask}
            />
           <IconButton  onClick={handleIconAdd}>
           <AddIcon sx={{ fontSize: 36, color: amber[500] }} />
            </IconButton> 
        </AddContainer>

    )
}

