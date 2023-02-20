import React from 'react'
import Container from 'primitives/Container'

import logo from 'media/p.png'

export default function Intro() {
  return (
    <article className="sm:min-h-[520px] py-[60px] md:py-[80px] border-ba border-slate-200">
      <div className="flex">
        <img className="w-[200px] h-[200px]" src={logo} />
        <div className="max-w-[800px] ml-14">
          <h1 className="text-4xl md:text-7xl font-karma font-light">
            Vill du ha hjälp med utvecklingen av din webbplats?
          </h1>
          <div className="text-2xl mt-3">
            <p>Ta gärna kontakt med mig.</p>
            <p>Patrik Hultgren, frilansande webbutvecklare i Stockholm.</p>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-center md:max-w-[600px]">
            <a
              className="border-[3px] px-4 py-2.5 text-lg hover:bg-white hover:text-black mr-2 w-full md:auto transition ease-in-out no-text-shadow-hover text-center"
              href="mailto:info@patrikhultgren.se"
            >
              Mejla info@patrikhultgren.se
            </a>
            <a
              className="border-[3px] px-4 py-2.5 text-lg hover:bg-white hover:text-black w-full md:auto mt-2 md:mt-0 transition ease-in-out no-text-shadow-hover text-center"
              href="tel:0708-445341"
            >
              eller ring 0708-44 53 41
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
