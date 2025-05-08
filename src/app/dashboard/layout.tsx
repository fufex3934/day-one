import React from 'react'

const DashboardLayout = ({children,team,analytics}:{
  children:React.ReactNode,
  team:React.ReactNode,
  analytics:React.ReactNode,
}) => {
  return (
    <div className='flex h-screen'>
      <div className='flex-1 p-4'>{children}</div>
      <div className='w-1/2 p-4 border-1'>{analytics}</div>
      <div className='w-1/2 p-4 border-1'>{team}</div>
    </div>
  )
}

export default DashboardLayout