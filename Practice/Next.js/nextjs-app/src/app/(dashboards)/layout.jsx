import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className='grid grid-cols-12'>
        {/* side nav */}
        <div className='col-span-3 border-r-2 text-lg'>
            <ul>
                <li>User List</li>
                <li>Terms & Condition</li>
                <li>Privacy</li>
            </ul>
        </div>

        {/* dashboard content */}
        <div className='col-span-9 ml-5'>
            {children}
        </div>
      </div>
    </div>
  )
}
