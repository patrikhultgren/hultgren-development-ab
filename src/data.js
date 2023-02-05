import TravrondenLogo from 'primitives/Logo/Travronden'
import ManufacturingGuideLogo from 'primitives/Logo/ManufacturingGuide'
import BokusLogo from 'primitives/Logo/Bokus'
import SpelvardeLogo from 'primitives/Logo/Spelvarde'
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
          På Akademibokhandeln har jag lett frontent-teamet med att sida för
          sida byta ut dagens sajt mot en Next.js applikation. Som en besökare
          märker man inte när man förflyttas mellan Next.js appen och den gamla
          teknologin. Alla sidor är inte utbytta än, men på så sätt kan man byta
          införa ny teknologi utan att behöva ersätta allting på en gång.
        </p>
        <p>
          För att sprida kunskap mellan projektmedlemmar och öka kvalitén har vi
          använt oss av pull requests.
        </p>
        <p>I projektet har vi arbetat med projektledningsmetoden Scrum.</p>
        <p>
          Till Next.js använder vi oss av tekniker som Typescript, Tailwind,
          Redux saga och Redis.
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
          Portalen. Det är en applikation som anställda inom Bokhandelsgruppen
          använder. Men den kan de exempelvis hantera Akademibokhandelns butiker
          och sköta inleveranser. Bokhandelsgruppen använder sig av
          mikrotjänstarkitektur och Portalen kommunicerar via dessa
          mikrotjänster. Portalen är ett gränssnitt som ett nav mellen
          egenutvecklade och köpta tjänster.
        </p>
        <p>
          Appen är byggt och designad av mig och jag har lett utbildning av
          andra utvecklare i den.
        </p>
        <p>Portalen är byggd med funktionella komponenter och hooks.</p>
        <p>
          Drift av Portalen sker i Kubernetes och driftsättning hanteras via
          Circle CI.
        </p>
      </>
    ),
  },
  {
    logo: <TravrondenLogo />,
    teaser: (
      <p>
        För Travronden har jag jobbat med ett React baserat CMS som heter TR
        Content. Systemet används av många sajter inom TR Media.
      </p>
    ),
  },
  {
    logo: <BokusLogo />,
    teaser: (
      <p>
        På Bokus var jag med och tog fram den nya kassan för privatpersoner. Den
        är byggd i React och med Klarna som betalleverantör.
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
