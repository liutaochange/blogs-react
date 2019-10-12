import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <span className="blogger-title">林大大的博客</span>
      </div>
    </Link>
  )
}

export default Logo
