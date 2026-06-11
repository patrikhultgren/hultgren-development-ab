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
          At Akademibokhandeln I led the frontend team in migrating the site
          page by page to a Next.js application. Visitors navigate seamlessly
          between the Next.js app and the legacy site. Not all pages are
          migrated yet, but this approach lets new technology roll in
          incrementally.
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
          For Bokhandelsgruppen I built an internal React app called Portalen.
          It is used by employees across Bokhandelsgruppen for various purposes,
          such as managing Akademibokhandeln stores and deliveries.
        </p>
      </>
    ),
  },
  {
    title: 'Travronden',
    logo: <TravrondenLogo />,
    teaser: (
      <p>
        For Travronden I worked on a React-based CMS called TR Content. The
        system is used by many sites within TR Media for publishing to both web
        and print.
      </p>
    ),
  },
  {
    title: 'Bokus',
    logo: <BokusLogo />,
    teaser: (
      <p>
        At Bokus I helped build the new checkout for their e-commerce platform.
        The goal was to make the payment experience smoother for customers. The
        checkout is built in React and integrates with Klarna.
      </p>
    ),
  },
]

export const largeProjects = [
  {
    title: 'DiskHunt',
    teaser:
      'DiskHunt is a site for finding and comparing storage devices such as SSDs and HDDs. With smart filters and a comparison view it makes it easy to find the right storage for your needs.',
    body: [
      'The site is built with Next.js, React and TypeScript. Product data is fetched from Amazon via the Rainforest API and stored in a custom backoffice system I also built from scratch.',
      'The backoffice lets me search for products on Amazon, enrich them with detailed data and sync them to the site. It consists of a Node.js/Fastify API and a React interface.',
    ],
    key: 'diskhunt',
    link: 'https://www.diskhunt.com',
  },
  {
    title: 'Weather',
    teaser:
      'Väder is a PWA with offline support that fetches weather data from Yr. Try adding the site as an icon on your home screen and it will feel like a native app. See the weather wherever you are in the world.',
    body: [
      <>
        The weather icons are made by Yr. To make them easier to use in
        React apps I built the component library{' '}
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
      'My goal with the app was to require as little interaction from the user as possible while still being useful. For example, you can share your location and skip searching to see your local forecast.',
    ],
    key: 'weather',
    link: 'https://patrikhultgren.github.io/weather/',
  },
  {
    title: 'Calendar',
    teaser:
      'The Calendar web app makes it easy to see week numbers and public holidays. To learn more and achieve good performance I chose to build it with Svelte.',
    body: [
      'Try adding the web app as an icon on your home screen. Once opened it works offline for previously visited pages, thanks to service worker caching which also improves performance.',
      'I have had a positive experience with Svelte and found it quick to pick up. You feel productive fast.',
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
  'Web Components',
  'Here Maps',
  'GCP',
  'AWS',
]
