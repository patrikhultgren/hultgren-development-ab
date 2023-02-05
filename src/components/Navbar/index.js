import React, { useState, useCallback, useMemo } from 'react'
import { HashLink } from 'react-router-hash-link'
import classNames from 'classnames'
import { menuitems } from 'data'

export default function Navbar() {
  const [show, setShow] = useState(false)

  const hamburgerClassName = useMemo(
    () =>
      classNames(
        'navbar-toggler',
        'hamburger',
        show ? 'hamburger-open' : 'collapsed'
      ),
    [show]
  )

  const navbarClassName = useMemo(
    () => classNames('navbar-collapse', 'collapse', { show: show }),
    [show]
  )

  const onMenuToggle = useCallback(() => {
    setShow((prev) => !prev)
  }, [])

  return (
    <header className="header">
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
              {menuitems.map((menuitem, index) => (
                <li className="nav-item" key={index}>
                  <HashLink to={menuitem.link} className="nav-link">
                    {menuitem.title}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
