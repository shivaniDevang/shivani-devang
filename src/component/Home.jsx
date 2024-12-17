import { Height } from '@mui/icons-material'
import { Box, Grid2, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Insert from './Insert'
import List from './List'
import Pic from './picc1.png'

export default function Home() {
  let initialValue;
  if (localStorage.getItem("notes")==null) {
    initialValue=[];
    
  } else {
    initialValue=JSON.parse(localStorage.getItem("notes"));
    
    
  }
  const[notes,setNotes]=useState(initialValue);
  const deleteNote=(id)=>{
    console.log(id);
    let remainingNotes=notes.filter((item)=>item.id!=id)
    localStorage.setItem("notes",JSON.stringify(remainingNotes))
    setNotes(remainingNotes)
  };
  const updatedNote = (note)=>{
    console.log(note)
    let status;
    if(note.completed){
      status=false;
    }
      else{
        status=true;
      }
      let modifiedNote={...note,completed:status};
      console.log(modifiedNote);
      let noteIndex=notes.findIndex((item)=>item.id==note.id);
      console.log(noteIndex);
      let modifiedCompleteNote=[...notes];
      modifiedCompleteNote.splice(noteIndex,1,modifiedNote)
      localStorage.setItem("notes",JSON.stringify(modifiedCompleteNote)) 
      setNotes(modifiedCompleteNote);   
  };
 
  return (
    <Box
      sx={{
        backgroundColor: "pink",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:`url(${Pic})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
      }}>
      <Paper sx={{ p: 2 }}>
        <Box>
          <Grid2 container spacing={2}>

            <Grid2 size={{ xs: 12 }}>
              <Typography sx={{
                textAlign: "center",
                fontWeight: "600",
                color: "purple",
                //textTransform: "uppercase",
              }}
              >
                To Do List
              </Typography>
            </Grid2>

            <Grid2 size={{ xs: 12 }}>
              <Insert setNotes={setNotes} notes={notes} />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Box sx={{maxHeight:"40vh", overflow:"auto"}}>
                {notes.length>0?
                notes.map((note,index)=>(
                 <List
                 updatedNote={updatedNote}
                 deleteNote={deleteNote} key={index} note={note} />
                )):(
                  <Typography color="secondary"sx={{textAlign:"center"}}>No notes Found!</Typography>
              
                )}
                </Box>
              <Box>
                
              </Box>
              
            </Grid2>
          </Grid2>
        </Box></Paper>
    </Box>
  )
}
