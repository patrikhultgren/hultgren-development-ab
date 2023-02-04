import React, { useState, useCallback, useMemo } from 'react'
import classNames from 'classnames'
import { menuitems } from '../../data'

import './style.css'

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  const hamburgerClassName = useMemo(
    () => classNames(
      'navbar-toggler',
      'hamburger',
      toggle ? 'hamburger-open' : 'collapsed'
  ), [toggle])

  const navbarClassName = useMemo(
    () => classNames(
      'navbar-collapse',
      'collapse',
      {'show' : toggle }
  ), [toggle])

  const onMenuToggle = useCallback(
    () => { setToggle(prev => !prev) },
    []
  )

  return (
    <header id="ph-navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div />
          <button
            className={hamburgerClassName}
            type="button"
            data-toggle="collapse"
            data-target="#navbar-supported-content"
            aria-controls="navbar-supported-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={onMenuToggle}
          >
            <span className="hamburger__top-bun" />
            <span className="hamburger__bottom-bun" />
          </button>
          <div />
          <div className={navbarClassName} id="navbar-supported-content">
            <ul className="navbar-nav mr-auto">
              {menuitems.map(menuitem => (
                <li className="nav-item" key={menuitem.id}>
                  {menuitem.link && (
                    <a href={menuitem.link} className="nav-link">
                      {menuitem.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
