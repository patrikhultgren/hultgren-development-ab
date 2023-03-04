import HultgrenDevelopmentLogo from 'primitives/Logo/HultgrenDevelopment'
import Container from 'primitives/Container'
import FacebookIcon from 'primitives/Logo/Facebook'
import LinkedInIcon from 'primitives/Logo/LinkedIn'

export default function Footer() {
  return (
    <footer role="contentinfo" className="py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
          <div className="mr-auto">
            <HultgrenDevelopmentLogo />
          </div>
          <div>
            <address className="not-italic">
              <span className="block uppercase text-lg">
                Hultgren Development AB
              </span>
              <span className="block text-slate-600">
                Stora Sköndals Väg 27
              </span>
              <span className="block text-slate-600">128 63 Sköndal</span>
            </address>
          </div>
          <div>
            <span className="block uppercase text-lg">Kontakt</span>
            <a href="tel:0708-445341" className="block text-slate-600">
              0708-445341
            </a>
            <a
              href="mailto:info@patrikhultgren.se"
              className="block text-slate-600"
            >
              info@patrikhultgren.se
            </a>
          </div>
          <div className="self-end">
            <div className="flex items-center">
              <a
                href="https://www.facebook.com/patrik.hultgren.7"
                className="mr-1"
              >
                <FacebookIcon />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.linkedin.com/in/patrik-hultgren-a9904893">
                <LinkedInIcon />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
