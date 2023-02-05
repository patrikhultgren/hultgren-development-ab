import React from 'react'
import ConditionalWrapper from 'utils/ConditionalWrapper'
import Container from 'primitives/Container'
import { projects } from 'data'

export default function Projects() {
  return (
    <article className="bg-white py-10" id="projekt">
      <Container>
        <h2 className="text-4xl text-center">Projekt</h2>
        <p className="text-lg text-center">Nedan är ett urval av projekt</p>
        <div className="grid gap-4 md:gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div className="mt-8" key={index}>
              <ConditionalWrapper
                condition={Boolean(project.link)}
                wrapperTrue={(children) => (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-16 border border-beige block flex items-center justify-center hover:bg-beige transition ease-in-out"
                  >
                    {children}
                  </a>
                )}
                wrapperFalse={(children) => (
                  <div className="h-16 border border-beige block flex items-center justify-center hover:bg-beige transition ease-in-out">
                    {children}
                  </div>
                )}
              >
                {project.logo}
                <span className="sr-only">{project.title}</span>
              </ConditionalWrapper>
              <div className="[&>p]:mt-4 mx-4 md:mx-8 text-lg">
                {project.teaser}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </article>
  )
}
