import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react'
import Email from "../Components/Email"

const Emails = () => {

    const [email,setEmail] = useState([])

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res =>setEmail(res.data))
        .catch(err => console.log(err))

    },[])

  return (
    <div>

        {
            email.map((email,idx) => {
               return <Email key={idx} email={email.email} username={email.username} />
            })
        }
    </div>
  )
}

export default Emails