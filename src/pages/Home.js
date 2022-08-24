import { useState, useEffect } from 'react';
import '../App.css'
import { Navigate, useNavigate } from "react-router-dom";


const Home = () => {

    useEffect(() => {
        fetchAssociations()
    }, [])

    const [associations, setAssociations] = useState([])

    const fetchAssociations = async () => {
        const request = await fetch('http://localhost:5000/association')
        const response = await request.json()    
        setAssociations(response)
    }

    const navigate = useNavigate()
    const handleNavigate = destination => {
        navigate(`/${destination}`);
    }

    return(
        <div>
        <ul className='home-list'>
            {associations.map((association, key) => {
                return(
                    <div key={key}>
                        <img className='thumbnail' onClick={() => handleNavigate(association.slug)} src={association.thumbnail} alt="" />
                    </div>
                )
                
            })}
        </ul>
        <h2 onClick={() => handleNavigate('messages')} className='message-link'>SEND A MESSAGE</h2>
        </div>
    )
}

export default Home