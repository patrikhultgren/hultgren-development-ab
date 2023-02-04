import React from 'react'
import classNames from 'classnames'
import ConditionalWrapper from 'utils/ConditionalWrapper'
import { projects } from 'data'

import './style.css'

export default function Projects() {
  return (
    <article id="ph-projects">
      <div className="container">
        <h2 id="projekt">Projekt</h2>
        <p className="lead">Nedan är ett urval av projekt</p>
        <div id="ph-projects-content" className="row">
          {projects.map((project, index) => (
            <div className={classNames('col-md-6', 'project-col')} key={index}>
              <ConditionalWrapper
                condition={Boolean(project.link)}
                wrapperTrue={(children) => (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-logo-link"
                  >
                    {children}
                  </a>
                )}
                wrapperFalse={(children) => (
                  <div className="project-logo">{children}</div>
                )}
              >
                {project.logo}
              </ConditionalWrapper>
              <p>{project.teaser}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
