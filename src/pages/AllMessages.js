import { useState, useEffect } from 'react';
import '../App.css'
import { Navigate, useNavigate } from "react-router-dom";

const AllMessages = () => {

    useEffect(() => {
        fetchMessages()
    }, [])

    const [messages, setMessages] = useState([])
    const [name, setName] = useState('yeezy')

    
    const fetchMessages = async () => {
        const request = await fetch(`http://localhost:5000/messages/${name}`)
        const response = await request.json()    
        setMessages(response)
    }
    
    console.log(messages)
    const handleChangeName = newName => {
        setName(newName)
    }
    
    return(
        <>
                    <div className='filter'>
                <button>All</button>
                <button onClick={() => handleChangeName('yeezy')}>Yeezy</button>
                <button onClick={() => handleChangeName('jordan-brand')}>Jordan</button>
                <button onClick={() => handleChangeName('cactus-jack')}>Cactus jack</button>
                </div>
        <ul className="messsage-list">
         {messages.map((message) => {
             return(
             <div className="message">
             <h2>{message.association}</h2>
             <h4>{message.object}</h4>
             <li>{message.content}</li>
             </div> )
         })}    
        </ul>
        </>
    )
}

export default AllMessages