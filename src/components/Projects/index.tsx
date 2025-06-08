import ConditionalWrapper from 'components/ConditionalWrapper'
import Container from 'components/Container'
import ArrowRight from 'components/Icon/ArrowRight'
import { smallProjects, largeProjects } from 'data'

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
          {smallProjects.map((project, index) => (
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
                {project.link ? <ArrowRight className="ml-3" /> : <></>}
              </ConditionalWrapper>
              <div className="[&>p]:mt-4 text-lg">{project.teaser}</div>
            </article>
          ))}
        </div>
        <article className="flex flex-col lg:flex-row border border-slate-300 mt-16 rounded">
          <div className="p-8 pr-16">
            <div>
              <h2 className="font-karma text-2xl md:text-6xl">
                <a
                  href="https://www.imagepickcolor.com"
                  className="flex items-center"
                >
                  Finn färgen <ArrowRight className="ml-3" />
                </a>
              </h2>
              <p className="text-xl mt-2">
                Finn färgen är en app där du kan ladda upp en bild och klicka
                för att enkelt få fram den exakta färgen (HEX och RGB) för just
                den pixeln. Perfekt för designers eller utvecklare som ofta
                jobbar med färger.
              </p>
              <p className="mt-6">
                Allt sker direkt i din webbläsareg. Appen fungerar även offline,
                så att du kan använda den när du vill, oavsett
                internetuppkoppling. Lägg gärna till den på hemskärmen.
              </p>
            </div>
          </div>
          <div className="w-[300px] shrink-0 mx-auto">
            <a href="https://www.imagepickcolor.com">
              <img
                src={`/imagepickcolor.png`}
                alt="Finn färgen webbapp"
                className="w-full grayscale-[50%] transition-all"
              />
            </a>
          </div>
        </article>
        {largeProjects.map((project) => (
          <article
            key={project.key}
            className="mt-16 flex flex-col bg-slate-100 border border-slate-300 rounded-lg p-6 md:p-10"
          >
            <h2 className="font-karma text-4xl md:text-6xl">
              <a href={project.link} className="flex items-center">
                {project.title} <ArrowRight className="ml-3" />
              </a>
            </h2>
            <div>
              <a
                href={project.link}
                className="float-right w-[30%] lg:w-[48%] md:ml-16 ml-6 mt-4 mb-4 md:mt-0"
              >
                <img
                  src={`/${project.key}-904w.png`}
                  alt={`${project.key} webbapp`}
                  className="w-full"
                />
              </a>
              <p className="mt-2 text-xl">{project.teaser}</p>
              {project.body.map((p) => (
                <p className="mt-6">{p}</p>
              ))}
            </div>
          </article>
        ))}
      </Container>
    </section>
  )
}
