import TravrondenIcon from 'primitives/Icon/Travronden'
import ManufacturingGuideIcon from 'primitives/Icon/ManufacturingGuide'

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
    logo: <ManufacturingGuideIcon />,
    teaser:
      'Manufacturing Guide är ett industriprojekt som ska stötta svensk industri. Jag har byggt sajten från scratch i Drupal / React.',
    link: 'https://www.manufacturingguide.com/sv',
  },
]
