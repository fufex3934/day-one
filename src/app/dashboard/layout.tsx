import React from 'react'
import Link from 'next/link'
const DashboardLayout = ({children}:{
  children:React.ReactNode,
}) => {
  return (
    <div>
      <nav style={{background:'#eee',padding:'1rem'}}>
        <h2>Dashboard Sidebar</h2>
        <ul>
        <Link href={"/"}><li>🏠 Home</li></Link>
        <Link href={"/dashboard/settings"}><li>⚙️ Settings</li></Link>
        <Link href={"/dashboard"}><li> Dashboard</li></Link>
        </ul>
      </nav>
      <main style={{padding:'1rem',border:'1px solid green'}}>{children}</main>
    </div>
  )
}

export default DashboardLayout