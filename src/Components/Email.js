import React from 'react'

const Email = ({email,username}) => {
  return (
    <div>
        <h2>Email: {email}</h2>
        <h3> Felhasználónév: {username}</h3>
    </div>
  )
}

export default Email