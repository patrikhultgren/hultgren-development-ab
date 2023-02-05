import TravrondenLogo from 'primitives/Logo/Travronden'
// import ManufacturingGuideLogo from 'primitives/Logo/ManufacturingGuide'
import BokusLogo from 'primitives/Logo/Bokus'
// import SpelvardeLogo from 'primitives/Logo/Spelvarde'
import AkademibokhandelnLogo from 'primitives/Logo/Akademibokhandeln'
import PortalenLogo from 'primitives/Logo/Portalen'

export const menuitems = [
  { link: '#om', title: 'Om mig' },
  { link: '#projekt', title: 'Projekt' },
]

export const projects = [
  {
    logo: <AkademibokhandelnLogo />,
    teaser: (
      <>
        <p>
          På Akademibokhandeln har jag lett frontend-teamet med att sida för
          sida byta ut dagens sajt mot en Next.js applikation. Som besökare
          navigerar man sömlöst mellan Next appen och den gamla sajten. Alla
          sidor är inte utbytta än, men på så sätt införs ny teknologi
          inkrementellt.
        </p>
        {/* <p>
          För att sprida kunskap mellan projektmedlemmar och öka kvalitén har vi
          använt oss av pull requests.
        </p> */}
        {/* <p>I projektet har vi arbetat med projektledningsmetoden Scrum.</p> */}
        <p>
          I appen använder jag mig av tekniker som Typescript, Tailwind, Redux
          saga och Redis.
        </p>
        <p>Appen är skalbar och driftas i Kubernetes.</p>
      </>
    ),
    link: 'https://www.akademibokhandeln.se/sok?sokfraga=harry+potter',
  },
  {
    logo: <PortalenLogo />,
    teaser: (
      <>
        <p>
          För Bokhandelsgruppen har jag byggt en intern React app kallad
          Portalen. Det är en app som anställda inom Bokhandelsgruppen använder
          för olika ändamål, t.ex. att hantera Akademibokhandelns butiker och
          inleveranser. Portalen är ett gränssnitt mellan egenutvecklade och
          köpta mikrotjänster i Bokhandelsgruppen.
        </p>
        {/* <p>
          Appen är byggd och designad av mig och jag har utbildat andra
          utvecklare i den.
        </p> */}
        {/* <p>Portalen är byggd med funktionella komponenter och hooks.</p> */}
        <p>
          Drift av Portalen sker i Kubernetes och driftsättning via Circle CI.
        </p>
      </>
    ),
  },
  {
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
    logo: <BokusLogo />,
    teaser: (
      <p>
        På Bokus var jag med och tog fram den nya checkouten för e-handeln.
        Målet med projektet var att göra det smidigare för kunden att betala.
        Checkouten är byggd i React och med Klarnas betallösning.
      </p>
    ),
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
