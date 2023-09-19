import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Name from "../Components/Name"

const Names = () => {

    const [names,setNames] = useState([]);

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setNames(res.data))
        .catch(err =>console.log(err))

    },[])

  return (
    <div>

        {
            names.map((user,idx) => {

                return <Name key={idx} name={user.name} />
            })
        }
    </div>
  )
}

export default Names