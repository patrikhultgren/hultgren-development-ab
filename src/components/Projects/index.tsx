import ConditionalWrapper from 'components/ConditionalWrapper'
import Container from 'components/Container'
import ArrowRight from 'components/Icon/ArrowRight'
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
                {project.link ? <ArrowRight className="ml-3" /> : <></>}
              </ConditionalWrapper>
              <div className="[&>p]:mt-4 text-lg">{project.teaser}</div>
            </article>
          ))}
        </div>
        <article className="mt-16 flex flex-col bg-slate-100 border border-slate-300 rounded-lg p-6 md:p-10">
          <h2 className="font-karma text-4xl md:text-6xl">
            <a
              href="https://patrikhultgren.github.io/weather/"
              className="flex items-center"
            >
              Väder <ArrowRight className="ml-3" />
            </a>
          </h2>
          <div>
            <img
              src="/weather-904w.png"
              srcSet="/weather-226w.png, /weather-452w.png 2x, /weather-678w.png 3x, /weather-904ww.png 4x"
              alt="Väder webbapp"
              className="w-[30%] lg:w-[48%] md:ml-16 ml-6 mt-4 mb-4 md:mt-0 float-right"
            />
            <p className="mt-2 text-xl">
              Väder är en PWA med offline stöd som hämtar vädret från Yr. Testa
              gärna att lägga till sajten som en ikon på hemskärmen i din mobil
              och den kommer kännas som en native app. Se vädret var du än är
              runt om i världen.
            </p>
            <p className="mt-6">
              Väderikonerna är skapade av Yr. För att göra de mer tillgängliga
              skapade jag ett React komponent bibliotek så att vem som helst kan
              använda de i sin app. Diagrammen är byggda i D3 vilket innebär
              renderas som SVG och därmed är skarpare än om de vore bilder.
            </p>
            <p className="mt-6">
              Min tanke med appen var att kräva så lite interaktion från
              användaren som möjligt och ändå vara användbar. T.ex. kan man dela
              med sig av sin position och då slippa att söka för att se sin
              väderprognos.
            </p>
          </div>
        </article>
        <article className="mt-8 flex flex-col bg-slate-100 border border-slate-300 rounded-lg p-6 md:p-10">
          <h2 className="font-karma text-4xl md:text-6xl">
            <a
              href="https://patrikhultgren.github.io/calendar"
              className="flex items-center"
            >
              Kalender <ArrowRight className="ml-3" />
            </a>
          </h2>
          <div>
            <img
              src="/calendar-904w.png"
              srcSet="/calendar-226w.png, /calendar-452w.png 2x, /calendar-678w.png 3x, /calendar-904ww.png 4x"
              alt="Kalender webbapp"
              className="w-[30%] lg:w-[48%] md:ml-16 ml-6 mt-4 mb-4 md:mt-0 float-right"
            />
            <p className="mt-2 text-xl">
              Kalender webbappen är till för att enkelt kunna se veckonummer och
              helgdagar. Anledningen till att jag byggde var för att lära mig
              mer om webbkomponenter. Därmed valde jag att bygga den med
              SvelteKit.
            </p>
            <p className="mt-6">
              Testa gärna att lägga till webbappen som en ikon på hemskärmen.
              Efter att du öppnat den fungerar den offline för dina tidigare
              besökta sidor. Det sker för att innehållet sparas ner via en
              service worker vilket också ger bättre prestanda.
            </p>
            <p className="mt-6">
              Jag har fått en positiv upplevelse av SvelteKit och tycker det har
              gått fort att komma in i. Man känner sig snabbt produktiv.
            </p>
          </div>
        </article>
      </Container>
    </section>
  )
}
