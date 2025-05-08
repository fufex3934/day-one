import React from 'react'

const DashboardLayout = ({children}:{
  children:React.ReactNode,
}) => {
  return (
    <div>
      <aside style={{background:'#eee',padding:'1rem'}}>
        <h2>Dashboard Sidebar</h2>
        <ul>
        <li>🏠 Home</li>
        <li>⚙️ Settings</li>
        </ul>
      </aside>
      <main style={{padding:'1rem'}}>{children}</main>
    </div>
  )
}

export default DashboardLayout