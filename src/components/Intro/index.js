import React from 'react'
import Container from 'primitives/Container'

const Intro = () => (
  <article className="intro text-white">
    <Container>
      <div className="text-center max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-7xl text-white font-karma font-light text-shadow">
          Vill du ha hjälp med utvecklingen av din webbplats?
        </h1>
        <div className="text-lg mt-4">
          <p>Ta gärna kontakt med mig.</p>
          <p>Patrik Hultgren, frilansande webbutvecklare i Stockholm.</p>
        </div>
        <div className="mt-12">
          <a
            className="border-[3px] px-4 py-3 text-lg"
            href="mailto:info@patrikhultgren.se"
          >
            Mejla info@patrikhultgren.se
          </a>
          <a className="border-[3px] px-4 py-3 text-lg" href="tel:0708-445341">
            eller ring 0708-445341
          </a>
        </div>
      </div>
    </Container>
  </article>
)

export default Intro
