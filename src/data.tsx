import TravrondenLogo from 'components/Icon/Logo/Travronden'
// import ManufacturingGuideLogo from 'components/Icon/Logo/ManufacturingGuide'
import BokusLogo from 'components/Icon/Logo/Bokus'
// import SpelvardeLogo from 'components/Icon/Logo/Spelvarde'
import AkademibokhandelnLogo from 'components/Icon/Logo/Akademibokhandeln'
import PortalenLogo from 'components/Icon/Logo/Portalen'
import WeatherLogo from 'components/Icon/Logo/Weather'

export const menuitems = [
  { link: '#om', title: 'Om mig' },
  { link: '#projekt', title: 'Projekt' },
]

export const projects = [
  {
    title: 'Akademibokhandeln',
    logo: (
      <AkademibokhandelnLogo className="w-[200px] h-[26px] md:w-[280px] md:h-[37px]" />
    ),
    teaser: (
      <>
        <p>
          På Akademibokhandeln har jag lett frontend-teamet med att sida för
          sida byta ut dagens sajt mot en Next.js applikation. Som besökare
          navigerar man sömlöst mellan Next appen och den gamla sajten. Alla
          sidor är inte utbytta än, men på så sätt införs ny teknologi
          inkrementellt.
        </p>
      </>
    ),
    link: 'https://www.akademibokhandeln.se/sok?sokfraga=harry+potter',
  },
  {
    title: 'Portalen',
    logo: <PortalenLogo />,
    teaser: (
      <>
        <p>
          För Bokhandelsgruppen har jag byggt en intern React app kallad
          Portalen. Det är en app som anställda inom Bokhandelsgruppen använder
          för olika ändamål, t.ex. att hantera Akademibokhandelns butiker och
          inleveranser.
        </p>
      </>
    ),
  },
  {
    title: 'Travronden',
    logo: <TravrondenLogo />,
    teaser: (
      <p>
        För Travronden har jag jobbat med ett React baserat CMS som heter TR
        Content. Systemet används av många sajter inom TR Media både för
        publicering till webb och tidning.
      </p>
    ),
  },
  {
    title: 'Bokus',
    logo: <BokusLogo />,
    teaser: (
      <p>
        På Bokus var jag med och tog fram den nya checkouten för e-handeln.
        Målet med projektet var att göra det smidigare för kunden att betala.
        Checkouten är byggd i React och med Klarnas betallösning.
      </p>
    ),
  },
  {
    title: 'Väderprognoser',
    logo: <WeatherLogo />,
    teaser: (
      <p>
        Väderprognoser är en PWA med offline stöd som hämtar vädret från Yr.
        Testa gärna att lägga till sajten som en ikon på hemskärmen i din mobil
        och den kommer kännas som en native app.
      </p>
    ),
    link: 'https://patrikhultgren.github.io/weather',
  },
  // {
  //   logo: <ManufacturingGuideLogo />,
  //   teaser: (
  //     <p>
  //       Manufacturing Guide är ett industriprojekt som ska stötta svensk
  //       industri. Jag har byggt sajten från scratch i Drupal / React.
  //     </p>
  //   ),
  //   link: 'https://www.manufacturingguide.com/sv',
  // },
  // {
  //   logo: <SpelvardeLogo />,
  //   teaser: (
  //     <p>
  //       För Spelvärde byggde jag den första versionen av sajten. Jag har även
  //       programmerat statistiska texter till startande hästar.
  //     </p>
  //   ),
  //   link: 'https://www.spelvarde.se',
  // },
]
