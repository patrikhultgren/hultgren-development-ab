import React from 'react'
import HultgrenDevelopmentLogo from 'primitives/Logo/HultgrenDevelopment'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div id="footer__col-1" className="footer__col col-md-6 col-lg-3">
            <HultgrenDevelopmentLogo />
          </div>
          <div id="footer__col-2" className="footer__col col-md-6 col-lg-3">
            <address>
              <span className="footer-header">Hultgren Development AB</span>
              <br />
              Stora Sköndals Väg 27
              <br />
              128 63 Sköndal
              <br />
            </address>
          </div>
          <div id="footer__col-3" className="footer__col col-md-6 col-lg-3">
            <span className="footer-header">Kontakt</span>
            <br />
            <a
              href="tel:0708-445341"
              className="ph-phone-number ph-phone-number-2"
            >
              0708-445341
            </a>
            <a href="mailto:info@patrikhultgren.se">info@patrikhultgren.se</a>
          </div>
          <div id="footer__col-4" className="footer__col col-md-6 col-lg-3">
            <span className="footer-header">&nbsp;</span>
            <br />
            <a
              className="fab fa-facebook fa-3x"
              href="https://www.facebook.com/patrik.hultgren.7"
            >
              <span className="sr-only">Facebook</span>
            </a>
            <a
              className="fab fa-linkedin fa-3x"
              href="https://www.linkedin.com/in/patrik-hultgren-a9904893"
            >
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
