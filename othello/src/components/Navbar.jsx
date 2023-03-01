import { useEffect, useState } from "react";
import "../index.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import { sidebarClasses, menuClasses } from "react-pro-sidebar";
import { BiArch } from "react-icons/bi";
import "./Navbar.css";

export default function NavBar() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "black",
          },
        }}
        className="MenuMain"
      >
        <h1 className="othello-text"> Othello </h1>
        {!collapsed && (
          <img
            className="center"
            src={process.env.PUBLIC_URL + "/Othello.jpeg"}
            alt="img"
          />
        )}
        <Menu>
          <MenuItem
            className="sidebar-text"
            icon={<BiArch size={70} color="gold" />}
          >
            {" "}
            Home
          </MenuItem>
          <MenuItem className="sidebar-text"> Our Menu</MenuItem>
          <MenuItem className="sidebar-text"> About</MenuItem>
          <MenuItem className="sidebar-text"> Aphrodite Suite</MenuItem>
          <MenuItem className="sidebar-text"> Contact</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
}
