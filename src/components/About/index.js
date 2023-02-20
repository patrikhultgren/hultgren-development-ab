import React from 'react'
import image from 'media/patrik-hultgren.png'
import Container from 'primitives/Container'

export default function About() {
  return (
    <article className="py-10 border-ba border-slate-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-8">
          <div className="col-span-6 relative">
            <h2 className="text-4xl md:text-6xl font-light font-karma">
              Om mig
            </h2>
            <figure className="absolute left-[150px] -top-4 block md:hidden">
              <img
                src={image}
                className="grayscale w-[60px] h-[60px]"
                alt="Porträtt av Patrik Hultgren"
                title="Patrik Hultgren"
              />
            </figure>
            <p className="text-xl mt-4">
              Sedan 2006 har jag arbetat som IT-konsult inom webb och har
              erfarenhet av många olika projekt och tekniker. Jag har jobbat med
              bokhandel, trav &amp; spel, tidningar, industri och politik. För
              mig är det viktigt att försöka förstå slutanvändarens behov och ta
              fram användarvänliga, snabba och snygga lösningar. Det är också
              viktigt med en välstrukturerad kodbas som enkelt går att förstå
              och vidareutveckla.
            </p>
            <p className="text-lg mt-4">
              Jag är en driven frontend utvecklare och är van att hantera
              projekt från start till mål. Tekniker jag ofta använder är{' '}
              <strong>React</strong> och <strong>Next.js</strong>. Mitt fokus
              går mot <strong>JavaScript</strong> då det möjliggör
              användarvänliga webbapplikationer.
            </p>
            <p className="text-lg mt-4">
              Jag har en kandidatexamen i digital medieteknik som jag läst på
              Blekinge Tekniska Högskola.
            </p>
          </div>
          <figure className="col-span-2 md:place-self-center hidden md:block">
            <img
              src={image}
              className="grayscale md:ml-8 mt-8"
              alt="Porträtt av Patrik Hultgren"
              title="Patrik Hultgren"
            />
          </figure>
        </div>
      </Container>
    </article>
  )
}
