import Container from 'components/Container'
import logo from 'media/p.png'

export default function Intro() {
  return (
    <article className="py-[60px] md:py-[80px] border-slate-200">
      <Container>
        <img
          className="md:w-[200px] md:h-[200px] sm:w-[130px] sm:h-[130px] w-[80px] h-[80px] sm:absolute sm:left-0 ml-autos mb-10"
          src={logo}
          alt="Hultgren Development AB logotyp"
        />
        <div className="max-w-[800px]">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-karma font-light">
            Vill du ha hjälp med utvecklingen av din webbplats?
          </h1>
          <div className="text-xl md:text-2xl mt-3">
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
      </Container>
    </article>
  )
}
