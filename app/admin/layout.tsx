import React, { ReactNode } from 'react'

interface props{
    children:ReactNode
}


const AdminLayout = ({children}:props) => {
  return (
    <div className='flex gap-4'>
        <aside className='bg-blue-500 text-white border p-5'>
            Admin SideBar
        </aside>
        <div className='bg-gray-50 flex justify-center items-center p-5'>{children}</div>
    </div>

  )
}

export default AdminLayout