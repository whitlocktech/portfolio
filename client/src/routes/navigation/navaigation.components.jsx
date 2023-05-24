import {
  Fragment
} from 'react'

import { Outlet, Link } from 'react-router-dom'
import Footer from '../../components/footer/footer.compoents'

import './naviagation.styles.scss'
import logo from '../../assests/logo.png'

const Navigation = () => { 
  return (
    <Fragment>
      <div className="navigation">
        <div className='nav-links'>
          <Link to="/" className='nav-links'>Home</Link>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="links-container">
          <Link to="/about" className='nav-links'>About</Link>
          <Link to="/projects" className='nav-links'>Projects</Link>
          <Link to="/contact" className='nav-links'>Contact</Link>
        </div>
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  )
}

export default Navigation