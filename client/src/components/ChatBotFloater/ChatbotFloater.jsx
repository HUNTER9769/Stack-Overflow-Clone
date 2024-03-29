import React,{ useState} from 'react'
import { Link } from 'react-router-dom'


import chatlogo from '../../assets/chatgpt.svg'
import './ChatbotFloater.css'
import { useNavigate } from 'react-router-dom'

const ChatbotFloater = () => {
    const [open , setOpen] = useState(false)
    const navigate = useNavigate()
    

    const hOpen = () => {
        setOpen(true)
    }

    const hClose = () => {
        setOpen(false)
    }

    


    
  return (
    <div className='chat-floater'>
        
        {/* <button onClick={hOpen} className='chat-ask-btn'>Ask GPT Chatbot</button> */}
        {/* <Modal open={open} onClose={hClose} className='chatbot-modal'>
            <Box className='chatbot-container'>
                <Typography id='chat-title' variant='h6' component='h2'>
                    Ask a Question
                </Typography>
                <form onSubmit={(e) => {hSubmit(e)}}>
                    <TextField value={prompt} onChange={(e) => setPrompt(e.target.value)} id='outlined-basic' label='Query' variant='outlined' sx={{margin: "15px, 0px", width: "100%"}}/>
                    <button type='submit' className='chat-ask-btn'>Submit</button>
                </form>

                {response && <div style={{padding:'10px', backgroundColor:'gray', color:'white', borderRadius:'10px', marginTop:'10px'}}>{response.data}</div>}
            </Box>

        </Modal> */}

        {/* <button to='/AskQuestion' onClick={navigate('/OtpVerifyPage')} className='chat-ask-btn'>Ask GPT Chatbot</button> */}
        <Link to='/OtpVerifyPage' className='chat-ask-btn'>Ask GPT Chatbot</Link>

        <img src={chatlogo} className='chatbot-logo' alt="" />
        
    </div>
  )
}

export default ChatbotFloater