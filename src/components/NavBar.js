import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className={'flex p-4 bg-blue-200'}>
       
                <NavLink className={({isActive})=>(isActive? ' text-xl bold text-red-500 m-2':'text-xl bold text-blue-500 m-2')} 
                to='/user'>Usuarios</NavLink>
                <NavLink className={({isActive})=>(isActive? ' text-xl bold text-red-500 m-2':'text-xl bold text-blue-500 m-2')}
                to='/file'>Archivos</NavLink>
         
    </div>
  )
}
