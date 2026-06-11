import TravrondenLogo from 'components/Icon/Logo/Travronden'
import BokusLogo from 'components/Icon/Logo/Bokus'
import AkademibokhandelnLogo from 'components/Icon/Logo/Akademibokhandeln'
import PortalenLogo from 'components/Icon/Logo/Portalen'

export const smallProjects = [
  {
    title: 'Akademibokhandeln',
    logo: (
      <AkademibokhandelnLogo className="w-[200px] h-[26px] md:w-[280px] md:h-[37px]" />
    ),
    teaser: (
      <>
        <p>
          Bei Akademibokhandeln leitete ich das Frontend-Team dabei, die Website
          Seite für Seite auf eine Next.js-Anwendung umzustellen. Besucher
          navigieren nahtlos zwischen der neuen App und der alten Website. Noch
          nicht alle Seiten sind migriert, aber so wird neue Technologie
          schrittweise eingeführt.
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
          Für Bokhandelsgruppen entwickelte ich eine interne React-App namens
          Portalen. Sie wird von Mitarbeitern der Gruppe für verschiedene Zwecke
          genutzt, zum Beispiel zur Verwaltung der Akademibokhandeln-Filialen
          und Lieferungen.
        </p>
      </>
    ),
  },
  {
    title: 'Travronden',
    logo: <TravrondenLogo />,
    teaser: (
      <p>
        Für Travronden arbeitete ich an einem React-basierten CMS namens TR
        Content. Das System wird von vielen Seiten innerhalb von TR Media sowohl
        für Web- als auch für Druckpublikationen genutzt.
      </p>
    ),
  },
  {
    title: 'Bokus',
    logo: <BokusLogo />,
    teaser: (
      <p>
        Bei Bokus war ich an der Entwicklung des neuen Checkout-Prozesses für
        den E-Commerce beteiligt. Das Ziel war, den Bezahlvorgang für Kunden
        angenehmer zu gestalten. Der Checkout ist in React gebaut und mit Klarna
        integriert.
      </p>
    ),
  },
]

export const largeProjects = [
  {
    title: 'DiskHunt',
    teaser:
      'DiskHunt ist eine Website zum Finden und Vergleichen von Speichergeräten wie SSDs und HDDs. Mit intelligenten Filtern und einer Vergleichsansicht findet man leicht den passenden Speicher für seine Bedürfnisse.',
    body: [
      'Die Website ist mit Next.js, React und TypeScript gebaut. Produktdaten werden von Amazon über die Rainforest API abgerufen und in einem eigenen Backoffice-System gespeichert, das ich ebenfalls von Grund auf entwickelt habe.',
      'Das Backoffice ermöglicht mir, Produkte auf Amazon zu suchen, mit detaillierten Daten anzureichern und mit der Website zu synchronisieren. Es besteht aus einer Node.js/Fastify-API und einer React-Oberfläche.',
    ],
    key: 'diskhunt',
    link: 'https://www.diskhunt.com/de-de',
  },
  {
    title: 'Väder (Wetter)',
    teaser:
      'Väder ist eine PWA mit Offline-Unterstützung, die Wetterdaten von Yr abruft. Füge die Seite als Symbol auf deinem Startbildschirm hinzu und sie fühlt sich wie eine native App an. Sieh das Wetter überall auf der Welt.',
    body: [
      <>
        Die Wetter-Icons stammen von Yr. Um sie in React-Apps einfacher nutzen
        zu können, entwickelte ich die Komponentenbibliothek{' '}
        <a
          className="underline"
          href="https://www.npmjs.com/package/react-yr-weather-icons"
          target="_blank"
          rel="noreferrer"
        >
          React Yr Weather Icons
        </a>
        .
      </>,
      'Mein Ziel mit der App war es, so wenig Interaktion wie möglich vom Nutzer zu erfordern und trotzdem nützlich zu sein. Zum Beispiel kann man den Standort teilen und so die lokale Wettervorhersage ohne Suche sehen.',
    ],
    key: 'weather',
    link: 'https://patrikhultgren.github.io/weather/',
  },
  {
    title: 'Kalender',
    teaser:
      'Die Kalender-Web-App macht es einfach, Kalenderwochen und Feiertage nachzuschlagen. Um mehr zu lernen und gute Performance zu erzielen, entschied ich mich, sie mit Svelte zu bauen.',
    body: [
      'Füge die Web-App als Symbol auf deinem Startbildschirm hinzu. Einmal geöffnet, funktioniert sie offline für bereits besuchte Seiten – dank Service-Worker-Caching, das auch die Performance verbessert.',
      'Meine Erfahrung mit Svelte war sehr positiv und ich fand es schnell zu erlernen. Man fühlt sich rasch produktiv.',
    ],
    key: 'calendar',
    link: 'https://patrikhultgren.github.io/calendar/',
  },
]

export const knowledges = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'RTK Query',
  'Redux-Saga',
  'Playwright',
  'Kubernetes',
  'Docker',
  'Scrum',
  'PWA',
  'Svelte',
  'Webkomponenten',
  'Here Maps',
  'GCP',
  'AWS',
]
