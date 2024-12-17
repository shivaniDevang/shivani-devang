import { Box, Button, Grid2, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Insert({notes,setNotes}) {
    const[noteTitle,setNoteTitle]=useState("");
    const[noteTitleError,setNoteTitleError]=useState(null);
    const handleChange=(e)=>{
        setNoteTitleError(null)
        setNoteTitle(e.target.value);
    };
    const handleSubmit=()=>{
        if(noteTitle==""){
            setNoteTitleError("please enter a title");
        }else{
            //console.log(notes);
            let noteId = notes.length == 0 ? 1 :notes[notes.length - 1].id + 1;
            let fullNote={id:noteId,title:noteTitle,completed:false};
            let updatedNoteData=[...notes,fullNote]
            console.log(updatedNoteData);
            localStorage.setItem("notes",JSON.stringify(updatedNoteData));
            setNotes(updatedNoteData);
            setNoteTitle("");
        }
    };
    return (
        <Box>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 10 }}>
                    <TextField
                    value={noteTitle}
                    onChange={handleChange}
                     fullWidth label="enter the title"
                        placeholder="enter the title here" helperText={noteTitleError && noteTitleError}
                        error={!!noteTitleError}/>
                </Grid2>
                <Grid2 size={{ xs: 2 }}>
                    <Button  onClick={handleSubmit}
                    variant="contained" color="secondary" fullWidth sx={{ p: 2 }}>ADD</Button>
                </Grid2>
            </Grid2>
        </Box>
    )
}
