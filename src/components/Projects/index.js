import React from 'react'
import classNames from 'classnames'
import ConditionalWrapper from 'utils/ConditionalWrapper'
import { projects } from 'data'

export default function Projects() {
  return (
    <article className="projects" id="projekt">
      <div className="container">
        <h2>Projekt</h2>
        <p className="projects__lead">Nedan är ett urval av projekt</p>
        <div className="row">
          {projects.map((project, index) => (
            <div
              className={classNames('projects__project', 'col-md-6', 'mt-3')}
              key={index}
            >
              <ConditionalWrapper
                condition={Boolean(project.link)}
                wrapperTrue={(children) => (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__project__logo"
                  >
                    {children}
                  </a>
                )}
                wrapperFalse={(children) => (
                  <div className="projects__project__logo">{children}</div>
                )}
              >
                {project.logo}
              </ConditionalWrapper>
              {project.teaser}
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
