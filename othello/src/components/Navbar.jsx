import React from 'react'
import '../index.css'
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  sidebarClasses
} from 'react-pro-sidebar'
import { BiArch } from 'react-icons/bi'
import './Navbar.css'

export default function NavBar() {
  const { collapseSidebar, collapsed } = useProSidebar()

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: 'black'
          }
        }}
        className="MenuMain"
      >
        <h1 className="othello-text"> Othello </h1>
        {!collapsed && (
          <img
            className="center"
            src={`${process.env.PUBLIC_URL}/Othello.jpeg`}
            alt="img"
          />
        )}
        <Menu>
          <MenuItem
            className="sidebar-text"
            icon={<BiArch size={70} color="gold" />}
          >
            Home
          </MenuItem>
          <MenuItem className="sidebar-text"> Our Menu</MenuItem>
          <MenuItem className="sidebar-text"> About</MenuItem>
          <MenuItem className="sidebar-text"> Aphrodite Suite</MenuItem>
          <MenuItem className="sidebar-text"> Contact</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button type="button" onClick={() => collapseSidebar()}>
          Collapse
        </button>
      </main>
    </div>
  )
}
