import TravrondenIcon from 'primitives/Icon/Travronden'
import ManufacturingGuideIcon from 'primitives/Icon/ManufacturingGuide'
import BokusIcon from 'primitives/Icon/Bokus'
import SpelvardeIcon from 'primitives/Icon/Spelvarde'

export const menuitems = [
  { link: '#om', title: 'Om mig' },
  { link: '#projekt', title: 'Projekt' },
]

export const projects = [
  {
    logo: <TravrondenIcon />,
    teaser:
      'För Travronden har jag jobbat med ett React baserat CMS som heter TR Content. Systemet används av många sajter inom TR Media.',
    link: 'https://www.travronden.se',
  },
  {
    logo: <SpelvardeIcon />,
    teaser:
      'För Spelvärde byggde jag den första versionen av sajten. Jag har även programmerat statistiska texter till startande hästar.',
    link: 'https://www.spelvarde.se',
  },
  {
    logo: <BokusIcon />,
    teaser:
      'På Bokus var jag med och tog fram den nya kassan för privatpersoner. Den är byggd i React och med Klarna som betalleverantör.',
    link: 'https://www.bokus.com',
  },
  {
    logo: <ManufacturingGuideIcon />,
    teaser:
      'Manufacturing Guide är ett industriprojekt som ska stötta svensk industri. Jag har byggt sajten från scratch i Drupal / React.',
    link: 'https://www.manufacturingguide.com/sv',
  },
]
