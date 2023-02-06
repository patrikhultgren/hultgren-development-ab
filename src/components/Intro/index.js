import React from 'react'
import Container from 'primitives/Container'

export default function Intro() {
  return (
    <article className="sm:min-h-[520px] bg-center bg-no-repeat bg-cover bg-[url('/src/media/lights-fuzzy.jpg')] text-white py-[60px] md:py-[80px]">
      <Container>
        <div className="text-center max-w-[800px] mx-auto text-shadow">
          <h1 className="text-4xl md:text-7xl text-white font-karma font-light">
            Vill du ha hjälp med utvecklingen av din webbplats?
          </h1>
          <div className="text-lg mt-4">
            <p>Ta gärna kontakt med mig.</p>
            <p>Patrik Hultgren, frilansande webbutvecklare i Stockholm.</p>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-center md:max-w-[600px] md:mx-auto">
            <a
              className="border-[3px] px-4 py-2.5 text-lg hover:bg-white hover:text-black mr-2 w-full md:auto transition ease-in-out no-text-shadow-hover"
              href="mailto:info@patrikhultgren.se"
            >
              Mejla info@patrikhultgren.se
            </a>
            <a
              className="border-[3px] px-4 py-2.5 text-lg hover:bg-white hover:text-black w-full md:auto mt-2 md:mt-0 transition ease-in-out no-text-shadow-hover"
              href="tel:0708-445341"
            >
              eller ring 0708-44 53 41
            </a>
          </div>
        </div>
      </Container>
    </article>
  )
}
