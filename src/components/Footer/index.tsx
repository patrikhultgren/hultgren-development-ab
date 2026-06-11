import HultgrenDevelopmentLogo from 'components/Icon/Logo/HultgrenDevelopment'
import Container from 'components/Container'
import FacebookIcon from 'components/Icon/Logo/Facebook'
import LinkedInIcon from 'components/Icon/Logo/LinkedIn'
import type { Translations } from 'translations'

const locales = [
  { code: 'sv', label: 'Svenska', href: '/' },
  { code: 'en', label: 'English', href: '/en' },
  { code: 'de', label: 'Deutsch', href: '/de' },
  { code: 'es', label: 'Español', href: '/es' },
]

type Props = {
  t: Translations['footer']
  currentLocale: 'sv' | 'en' | 'de' | 'es'
}

export default function Footer({ t, currentLocale }: Props) {
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
            <span className="block uppercase text-lg">{t.contactHeading}</span>
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
          <div className="flex flex-col justify-between gap-6">
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
            <nav aria-label="Language switcher">
              <ul className="flex flex-wrap gap-x-3 gap-y-1">
                {locales.map(({ code, label, href }) => (
                  <li key={code}>
                    {code === currentLocale ? (
                      <span className="text-black font-medium">{label}</span>
                    ) : (
                      <a href={href} className="text-slate-500 hover:text-black transition-colors">
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
}
