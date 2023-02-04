import React, { useState, useCallback, useMemo } from 'react'
import classNames from 'classnames'
import { menuitems } from '../../data'

import './style.css'

export default function Navbar() {
  const [show, setShow] = useState(false)

  const hamburgerClassName = useMemo(
    () => classNames(
      'navbar-toggler',
      'hamburger',
      show ? 'hamburger-open' : 'collapsed'
  ), [show])

  const navbarClassName = useMemo(
    () => classNames(
      'navbar-collapse',
      'collapse',
      {'show' : show }
  ), [show])

  const onMenuToggle = useCallback(
    () => { setShow(prev => !prev) },
    []
  )

  return (
    <header id="ph-navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div />
          <button
            type="button"
            className={hamburgerClassName}
            onClick={onMenuToggle}
          >
            <span className="hamburger__top-bun" />
            <span className="hamburger__bottom-bun" />
          </button>
          <div />
          <div className={navbarClassName}>
            <ul className="navbar-nav mr-auto">
              {menuitems.map(menuitem => (
                <li className="nav-item" key={menuitem.id}>
                  <a href={menuitem.link} className="nav-link">
                    {menuitem.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
