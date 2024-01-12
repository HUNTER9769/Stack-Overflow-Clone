import React from 'react'
import './LeftSidebar.css'
import  {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/'  className={(navData) => (navData.isActive ? "active side-nav-links" : 'none')} /*style={{ paddingLeft: '40px'}}*/>
                <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className={(navData) => (navData.isActive ? "active side-nav-links" : 'none')}>
                        <img src={Globe} alt="Globe" />
                        <p style={{paddingLeft:'10px'}}>Questions</p>
                    </NavLink>
                    <NavLink to='/Tags' className={(navData) => (navData.isActive ? "active side-nav-links" : 'none')} style={{paddingLeft:'40px'}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Tags' className={(navData) => (navData.isActive ? "active side-nav-links" : 'none')} style={{paddingLeft:'40px'}}>
                        <p>Users</p>
                    </NavLink>
            </div>

        </nav>
    </div>
  )
}

export default LeftSidebar