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
    teaser:
      'På Akademibokhandeln har jag lett frontent-teamet med att sida för sida byta ut dagens sajt mot en Next.js applikation.',
    link: 'https://www.akademibokhandeln.se/sok?sokfraga=harry+potter',
  },
  {
    logo: <PortalenLogo />,
    teaser:
      'För Bokhandelsgruppen har jag byggt en applikation kallad Portalen. Den sköter inleveranser i Akademibokhandelns butiker.',
  },
  {
    logo: <TravrondenLogo />,
    teaser:
      'För Travronden har jag jobbat med ett React baserat CMS som heter TR Content. Systemet används av många sajter inom TR Media.',
    link: 'https://www.travronden.se',
  },
  {
    logo: <SpelvardeLogo />,
    teaser:
      'För Spelvärde byggde jag den första versionen av sajten. Jag har även programmerat statistiska texter till startande hästar.',
    link: 'https://www.spelvarde.se',
  },
  {
    logo: <BokusLogo />,
    teaser:
      'På Bokus var jag med och tog fram den nya kassan för privatpersoner. Den är byggd i React och med Klarna som betalleverantör.',
  },
  {
    logo: <ManufacturingGuideLogo />,
    teaser:
      'Manufacturing Guide är ett industriprojekt som ska stötta svensk industri. Jag har byggt sajten från scratch i Drupal / React.',
    link: 'https://www.manufacturingguide.com/sv',
  },
]
