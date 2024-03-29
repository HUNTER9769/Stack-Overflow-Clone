import React, {useState} from 'react'

import {Modal, Typography, Box, TextField} from '@mui/material'
import axios from 'axios'

const ChatPage = () => {
    const [prompt, setPrompt] = useState('')
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    
    const hSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);

        const promptresponse = await axios.post( 'http://localhost:5000/chat', {prompt})
        setResponse(promptresponse);
        setLoading(false);
        console.log(promptresponse);
    }

  return (
    <Box className='chatbot-container' style={{marginTop: "50px"}}>
        <Typography id='chat-title' variant='h6' component='h2'>
            Ask a Question
        </Typography>
        <form onSubmit={(e) => {hSubmit(e)}}>
            <TextField value={prompt} onChange={(e) => setPrompt(e.target.value)} id='outlined-basic' label='Query' variant='outlined' sx={{margin: "15px, 0px", width: "100%"}}/>
            <button type='submit' className='chat-ask-btn'>Submit</button>
        </form>

        {response && <div style={{padding:'10px', backgroundColor:'gray', color:'white', borderRadius:'10px', marginTop:'10px'}}>{response.data}</div>}
    </Box>
  )
}

export default ChatPage