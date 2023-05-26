import TravrondenLogo from 'components/Icon/Logo/Travronden'
import BokusLogo from 'components/Icon/Logo/Bokus'
import AkademibokhandelnLogo from 'components/Icon/Logo/Akademibokhandeln'
import PortalenLogo from 'components/Icon/Logo/Portalen'

export const menuitems = [
  { link: '#om', title: 'Om mig' },
  { link: '#projekt', title: 'Projekt' },
]

export const smallProjects = [
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
        Checkouten är byggd i React och med Klarna.
      </p>
    ),
  },
]

export const largeProjects = [
  {
    title: 'Väder',
    teaser:
      'Väder är en PWA med offline stöd som hämtar vädret från Yr. Testa gärna att lägga till sajten som en ikon på hemskärmen i din mobil och den kommer kännas som en native app. Se vädret var du än är runt om i världen.',
    body: [
      'Väderikonerna är skapade av Yr. För att göra de mer tillgängliga skapade jag ett React komponent bibliotek så att vem som helst kan använda de i sin app. Diagrammen är byggda i D3 vilket innebär renderas som SVG och därmed är skarpare än om de vore bilder.',
      'Min tanke med appen var att kräva så lite interaktion från användaren som möjligt och ändå vara användbar. T.ex. kan man dela med sig av sin position och då slippa att söka för att se sin väderprognos.',
    ],
    key: 'weather',
    link: 'https://patrikhultgren.github.io/weather/',
  },
  {
    title: 'Kalender',
    teaser:
      'Kalender webbappen är till för att enkelt kunna se veckonummer och helgdagar. För att lära mig mer och för att uppnå bra prestanda valda jag att bygga den med SvelteKit.',
    body: [
      'Testa gärna att lägga till webbappen som en ikon på hemskärmen. Efter att du öppnat den fungerar den offline för dina tidigare besökta sidor. Det sker för att innehållet sparas ner via en service worker vilket också förbättrar prestandan.',
      'Jag har fått en positiv upplevelse av SvelteKit och tycker det har gått fort att komma in i. Man känner sig snabbt produktiv.',
    ],
    key: 'calendar',
    link: 'https://patrikhultgren.github.io/calendar/',
  },
]
