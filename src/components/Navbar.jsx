import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="absolute w-full flex justify-between items-center bg-dark-blue p-4 px-12">
        <Link to='/'>
            <h1 className="text-xl font-bold text-white">Where in the world?</h1>
        </Link>
        <span className="font-bold text-white">All countries in the world</span>
    </nav>
  )
}

export default Navbar
