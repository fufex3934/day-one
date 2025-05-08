import React from 'react'

const ProfileLayout = ({children}:{
  children:React.ReactNode,
}) => {
  return (
    <div>
      <nav style={{background:'#eee',padding:'1rem'}}>
        <ul>
          <li>Home</li>
          <li>My Info</li>
          <li>Logout</li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default ProfileLayout