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
          En Akademibokhandeln lideré el equipo de frontend migrando el sitio
          página por página a una aplicación Next.js. Los visitantes navegan
          sin interrupciones entre la nueva app y el sitio legacy. No todas las
          páginas están migradas aún, pero así se incorpora la nueva tecnología
          de forma incremental.
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
          Para Bokhandelsgruppen construí una aplicación React interna llamada
          Portalen. La usan los empleados del grupo para distintos fines, como
          gestionar las tiendas de Akademibokhandeln y las entregas.
        </p>
      </>
    ),
  },
  {
    title: 'Travronden',
    logo: <TravrondenLogo />,
    teaser: (
      <p>
        Para Travronden trabajé en un CMS basado en React llamado TR Content.
        El sistema lo utilizan muchos sitios de TR Media tanto para publicar en
        la web como en formato impreso.
      </p>
    ),
  },
  {
    title: 'Bokus',
    logo: <BokusLogo />,
    teaser: (
      <p>
        En Bokus participé en el desarrollo del nuevo proceso de pago para su
        comercio electrónico. El objetivo era hacer el pago más fluido para los
        clientes. El checkout está construido en React e integrado con Klarna.
      </p>
    ),
  },
]

export const largeProjects = [
  {
    title: 'DiskHunt',
    teaser:
      'DiskHunt es un sitio para encontrar y comparar dispositivos de almacenamiento como SSDs y HDDs. Con filtros inteligentes y una vista comparativa, facilita encontrar el almacenamiento adecuado para tus necesidades.',
    body: [
      'El sitio está construido con Next.js, React y TypeScript. Los datos de productos se obtienen de Amazon a través de la API Rainforest y se almacenan en un sistema de backoffice propio que también desarrollé desde cero.',
      'El backoffice me permite buscar productos en Amazon, enriquecerlos con datos detallados y sincronizarlos con el sitio. Consiste en una API Node.js/Fastify y una interfaz React.',
    ],
    key: 'diskhunt',
    link: 'https://www.diskhunt.com/es-es',
  },
  {
    title: 'Väder (Tiempo)',
    teaser:
      'Väder es una PWA con soporte offline que obtiene datos meteorológicos de Yr. Prueba a añadir el sitio como icono en tu pantalla de inicio y se sentirá como una app nativa. Consulta el tiempo donde quieras en el mundo.',
    body: [
      <>
        Los iconos del tiempo son de Yr. Para facilitar su uso en apps React,
        desarrollé la biblioteca de componentes{' '}
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
      'Mi objetivo con la app era requerir la mínima interacción posible del usuario sin dejar de ser útil. Por ejemplo, puedes compartir tu ubicación y ver tu pronóstico local sin necesidad de buscar.',
    ],
    key: 'weather',
    link: 'https://patrikhultgren.github.io/weather/',
  },
  {
    title: 'Kalender (Calendario)',
    teaser:
      'La app web Calendario facilita consultar números de semana y festivos. Para aprender más y lograr buen rendimiento, decidí construirla con Svelte.',
    body: [
      'Prueba a añadir la app como icono en tu pantalla de inicio. Una vez abierta, funciona sin conexión para las páginas ya visitadas, gracias al caché del service worker, que también mejora el rendimiento.',
      'Mi experiencia con Svelte ha sido muy positiva y me resultó fácil de aprender. Te sientes productivo rápidamente.',
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
