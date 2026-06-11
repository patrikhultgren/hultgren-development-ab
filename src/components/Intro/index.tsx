import Container from 'components/Container'
import logo from 'media/p.png'
import type { Translations } from 'translations'

type Props = { t: Translations['intro'] }

export default function Intro({ t }: Props) {
  return (
    <article className="py-[60px] md:py-[80px] border-slate-200">
      <Container>
        <img
          className="md:w-[200px] md:h-[200px] sm:w-[130px] sm:h-[130px] w-[80px] h-[80px] sm:absolute sm:left-0 ml-autos mb-10"
          src={logo.src}
          alt="Hultgren Development AB logotyp"
        />
        <div className="max-w-[800px]">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-karma font-light">
            {t.heading}
          </h1>
          <div className="text-xl md:text-2xl mt-3">
            <p>{t.subheading}</p>
            <p>{t.byline}</p>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-center md:max-w-[600px]">
            <a
              className="border-[3px] px-4 py-2.5 text-lg hover:bg-white hover:text-black mr-2 w-full md:auto transition ease-in-out no-text-shadow-hover text-center"
              href="mailto:info@patrikhultgren.se"
            >
              {t.emailLabel}
            </a>
            <a
              className="border-[3px] px-4 py-2.5 text-lg hover:bg-white hover:text-black w-full md:auto mt-2 md:mt-0 transition ease-in-out no-text-shadow-hover text-center"
              href="tel:0708-445341"
            >
              {t.phoneLabel}
            </a>
          </div>
        </div>
      </Container>
    </article>
  )
}
