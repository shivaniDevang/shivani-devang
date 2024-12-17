
import { Box, Checkbox, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function List({ note, deleteNote,updatedNote }) {
  return (
    <Paper elevation={3} sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
      <Box sx={{
        display: "flex", gap: 1,
        alignItem: "center"
      }}>
        <Checkbox checked={note.completed?true:false}onChange={()=>updatedNote(note)} />
        <Typography sx={{
          fontWeight: "600",
          textTransform: "capitalize",
          textDecoration:note.completed?"line-through":"none",
          color: "text.secondary",
        }}>
          {note.title}</Typography>
      </Box>
      <IconButton onClick={() => deleteNote(note.id)} color='error'>
        <DeleteIcon />
      </IconButton>
    </Paper>
  )
}
