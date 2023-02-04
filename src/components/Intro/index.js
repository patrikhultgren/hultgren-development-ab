import React from 'react'

import './style.css'

const Intro = () => (
  <article id="ph-intro">
    <div className="jumbotron">
      <div className="container">
        <div className="jumbotron-inner">
          <h1 className="display-3">Vill du ha hjälp med utvecklingen av din webbplats?</h1>
          <div class="lead-teaser">
            <div>
              <p>Ta gärna kontakt med mig.</p>
              <p>Patrik Hultgren, frilansande webbutvecklare i Stockholm.</p>
            </div>
          </div>
          <p className="lead-buttons">
            <a
              className="btn btn-outline-primary btn-lg ph-mail-link"
              href="mailto:info@patrikhultgren.se"
              role="button"
            >
              Mejla
            </a>
            <a
              className="btn btn-outline-primary btn-lg ph-phone-number ph-phone-number-1"
              href="tel:0708-445341"
              role="button"
            >
              eller ring 0708-445341
            </a>
          </p>
        </div>
      </div>
    </div>
  </article>
)

export default Intro
