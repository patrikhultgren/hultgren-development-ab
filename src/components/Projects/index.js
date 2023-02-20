import React from 'react'
import ConditionalWrapper from 'utils/ConditionalWrapper'
import Container from 'primitives/Container'
import { projects } from 'data'

export default function Projects() {
  return (
    <section
      id="projekt"
      className="bg-white py-12 border-b border-slate-200"
      aria-labelledby="projects-title"
    >
      <Container>
        <h2 className="text-6xl font-light font-karma" id="projects-title">
          Projekt
        </h2>
        <p className="text-xl">Nedan är ett urval av projekt</p>
        <div className="grid gap-4 md:gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article className="mt-8" key={index}>
              <ConditionalWrapper
                condition={Boolean(project.link)}
                wrapperTrue={(children) => (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-16 border-t border-b border-slate-200 block flex items-center justify-center hover:bg-beige transition ease-in-out"
                  >
                    {children}
                  </a>
                )}
                wrapperFalse={(children) => (
                  <div className="h-16 border-t border-b border-slate-200 block flex items-center justify-center hover:bg-beige transition ease-in-out">
                    {children}
                  </div>
                )}
              >
                {project.logo}
                <span className="sr-only">{project.title}</span>
              </ConditionalWrapper>
              <div className="[&>p]:mt-4 text-lg">{project.teaser}</div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
