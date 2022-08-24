import '../App.css'
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"


const Messages = () => {

    // useEffect(() => {
    //     fetchAssociations()
    // }, [])

    const [associations, setAssociations] = useState([])
    const [association, setAssociation] = useState('')
    const [object, setObject] = useState('')
    const [content, setContent] = useState('')

    const handleaAssociationChange = e => {
        setAssociation(e.target.value)
    }
    const handleObjectChange = e => {
        setObject(e.target.value)
    }
    const handleContentChange = e => {
        setContent(e.target.value)
    }

  const handleSubmit = async e => {
    e.preventDefault()

    const body = {
      association,
      object,
      content
    }

    const request = await fetch('http://localhost:5000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(body)
    })

    const response = await request.json()
    console.log(response)
}

    return(
        <>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <input value={association} onChange={handleaAssociationChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom de l'association"></input>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
  <div className="form-group">
    <input value={object} onChange={handleObjectChange} type="text" className="form-control" id="exampleInputPassword1" placeholder="Objet"></input>
  </div>
  <div className="form-group">
    <input value={content} onChange={handleContentChange} type="text" className="form-control" id="exampleInputPassword1" placeholder="Message"></input>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </>
    )
}


export default Messages