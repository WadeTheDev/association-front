import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import '../App.css'


const Association = () => {

    useEffect(() => {
        fetchAssociations()
    }, [])

    const [associations, setAssociations] = useState([])
    const { association } = useParams()

    const fetchAssociations = async () => {
        const request = await fetch(`http://localhost:5000/association/${association}`)
        const response = await request.json()    
        setAssociations(response)
    }

 console.log(associations);

    return(
        <div>
        <ul>
            {associations.map((association, key) => {
                return(
                    <div key={key}>
                    <img src={association.image} alt="" />
                    <li>{association.name}</li>
                    <li>{association.description}</li>
                    </div>
                )
                
            })}
        </ul>
        </div>
    )
}

export default Association