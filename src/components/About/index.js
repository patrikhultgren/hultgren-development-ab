import React from 'react'
import image from 'media/patrik-hultgren.png'

import './style.css'

export default function About() {
  return (
    <main id="ph-about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-patrik">
            <img
              src={image}
              id="patrik"
              alt="Patrik Hultgren"
              title="Patrik Hultgren"
            />
          </div>
          <div className="col-lg-9">
            <h2 id="om">Om mig</h2>
            <p className="lead">
              Sedan 2006 har jag arbetat som IT-konsult inom webb och har
              erfarenhet av många olika projekt och tekniker. Jag har jobbat med
              bokhandel, trav &amp; spel, tidningar, industri och politik. För
              mig är det viktigt att försöka förstå slutanvändarens behov och ta
              fram användarvänliga, snabba och snygga lösningar. Det är också
              viktigt med en välstrukturerad kodbas som enkelt går att förstå
              och vidareutveckla.
            </p>
            <p>
              Jag är en driven frontend utvecklare och är van att hantera
              projekt från start till mål. Tekniker jag ofta använder är{' '}
              <strong>React</strong> och <strong>Next.js</strong>. Mitt fokus
              går mot <strong>JavaScript</strong> då det möjligör
              användarvänliga webbapplikationer.
            </p>
            <p>
              Jag har en filosofi kandidatexamen i digital medieteknik som jag
              läst på Blekinge Tekniska Högskola.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
