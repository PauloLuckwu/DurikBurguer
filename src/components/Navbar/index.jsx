import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
      <ul class="flex gap-5 text-slate-800 font-semibold">
        <li>
          <NavLink
            to={`/`}
            class={({ isActive }) => (isActive ? "text-amber-400" : "")}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/orders`}
            class={({ isActive }) => (isActive ? "text-amber-400" : "")}
          >
            Pedidos
          </NavLink>
        </li>
      </ul>
    );
  }
  
  export default Navbar;