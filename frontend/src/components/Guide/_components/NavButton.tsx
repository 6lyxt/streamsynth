import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './../Guide.module.css'

function NavButton(props: { to: string, children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === props.to;

  return (
      <li>
          <button
              className={isActive ? styles.active : ""}
              onClick={() => navigate(props.to)}
          >
              {props.children}
          </button>
      </li>
  );
}

export default NavButton

