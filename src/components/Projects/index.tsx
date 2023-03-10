import ConditionalWrapper from 'components/ConditionalWrapper'
import Container from 'components/Container'
import { projects } from 'data'

export default function Projects() {
  return (
    <section className="bg-white py-12" aria-labelledby="projects-title">
      <Container>
        <h2
          className="text-4xl md:text-6xl font-light font-karma"
          id="projects-title"
        >
          Projekt
        </h2>
        <p className="text-xl">Nedan är ett urval av projekt</p>
        <div className="grid gap-4 md:gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <article className="mt-8" key={index}>
              <ConditionalWrapper
                condition={Boolean(project.link)}
                wrapperTrue={(children) => (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-16 border-t border-b border-slate-200 block flex items-center justify-center"
                  >
                    {children}
                  </a>
                )}
                wrapperFalse={(children) => (
                  <div className="h-16 border-t border-b border-slate-200 block flex items-center justify-center">
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
