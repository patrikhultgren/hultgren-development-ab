import type { ReactNode } from 'react'

export type Translations = {
  intro: {
    heading: string
    subheading: string
    byline: string
    emailLabel: string
    phoneLabel: string
  }
  projects: {
    heading: string
    subheading: string
    imageAlt: (key: string) => string
  }
  knowledge: {
    heading: string
  }
  about: {
    heading: string
    body: ReactNode[]
  }
  footer: {
    contactHeading: string
  }
}

export const sv: Translations = {
  intro: {
    heading: 'Vill du ha hjälp med utvecklingen av din webbplats?',
    subheading: 'Ta gärna kontakt med mig.',
    byline: 'Patrik Hultgren, frilansande webbutvecklare i Stockholm.',
    emailLabel: 'Mejla info@patrikhultgren.se',
    phoneLabel: 'eller ring 0708-44 53 41',
  },
  projects: {
    heading: 'Projekt',
    subheading: 'Nedan är ett urval av projekt',
    imageAlt: (key) => `${key} webbapp`,
  },
  knowledge: {
    heading: 'Kunskaper',
  },
  about: {
    heading: 'Om mig',
    body: [
      'Sedan 2006 har jag arbetat som IT-konsult inom webb och har erfarenhet av många olika projekt och tekniker. Jag har jobbat med bokhandel, trav & spel, tidningar, industri och politik. För mig är det viktigt att försöka förstå slutanvändarens behov och ta fram användarvänliga, snabba och snygga lösningar. Det är också viktigt med en välstrukturerad kodbas som enkelt går att förstå och vidareutveckla.',
      <>
        Jag är en driven frontend utvecklare och är van att hantera projekt från
        start till mål. Tekniker jag ofta använder är <strong>React</strong> och{' '}
        <strong>Next.js</strong>. Mitt fokus går mot <strong>JavaScript</strong>{' '}
        då det möjliggör användarvänliga webbapplikationer.
      </>,
      'Jag har en kandidatexamen i digital medieteknik som jag läst på Blekinge Tekniska Högskola.',
    ],
  },
  footer: {
    contactHeading: 'Kontakt',
  },
}

export const es: Translations = {
  intro: {
    heading: '¿Necesitas ayuda con el desarrollo de tu sitio web?',
    subheading: 'No dudes en ponerte en contacto conmigo.',
    byline: 'Patrik Hultgren, desarrollador web freelance en Estocolmo.',
    emailLabel: 'Escríbeme a info@patrikhultgren.se',
    phoneLabel: 'o llama al +46 708-44 53 41',
  },
  projects: {
    heading: 'Proyectos',
    subheading: 'Una selección de proyectos',
    imageAlt: (key) => `${key} aplicación web`,
  },
  knowledge: {
    heading: 'Habilidades',
  },
  about: {
    heading: 'Sobre mí',
    body: [
      'Desde 2006 trabajo como consultor de TI en desarrollo web con experiencia en una gran variedad de proyectos y tecnologías. He trabajado en comercio de libros, carreras de caballos y juegos, periódicos, industria y política. Para mí es importante entender las necesidades del usuario final y ofrecer soluciones atractivas, rápidas y fáciles de usar. Una base de código bien estructurada, fácil de entender y de ampliar es igualmente importante.',
      <>
        Soy un desarrollador frontend apasionado, acostumbrado a gestionar
        proyectos de principio a fin. Las tecnologías que uso con más frecuencia
        son <strong>React</strong> y <strong>Next.js</strong>. Mi enfoque está
        en <strong>JavaScript</strong>, ya que permite crear aplicaciones web
        orientadas al usuario.
      </>,
      'Tengo una licenciatura en Tecnología de Medios Digitales por el Instituto Tecnológico de Blekinge.',
    ],
  },
  footer: {
    contactHeading: 'Contacto',
  },
}

export const de: Translations = {
  intro: {
    heading: 'Benötigst du Hilfe bei der Entwicklung deiner Website?',
    subheading: 'Melde dich gerne bei mir.',
    byline: 'Patrik Hultgren, freiberuflicher Webentwickler in Stockholm.',
    emailLabel: 'E-Mail: info@patrikhultgren.se',
    phoneLabel: 'oder ruf an: +46 708-44 53 41',
  },
  projects: {
    heading: 'Projekte',
    subheading: 'Eine Auswahl an Projekten',
    imageAlt: (key) => `${key} Web-App`,
  },
  knowledge: {
    heading: 'Kenntnisse',
  },
  about: {
    heading: 'Über mich',
    body: [
      'Seit 2006 arbeite ich als IT-Berater in der Webentwicklung mit Erfahrung in vielen verschiedenen Projekten und Technologien. Ich habe in den Bereichen Buchhandel, Pferderennen und Gaming, Zeitungen, Industrie und Politik gearbeitet. Für mich ist es wichtig, die Bedürfnisse der Endnutzer zu verstehen und benutzerfreundliche, schnelle und ansprechende Lösungen zu entwickeln. Eine gut strukturierte Codebasis, die leicht zu verstehen und zu erweitern ist, ist ebenso wichtig.',
      <>
        Ich bin ein engagierter Frontend-Entwickler, der es gewohnt ist,
        Projekte von Anfang bis Ende zu begleiten. Technologien, die ich
        häufig einsetze, sind <strong>React</strong> und{' '}
        <strong>Next.js</strong>. Mein Fokus liegt auf{' '}
        <strong>JavaScript</strong>, da es benutzerfreundliche
        Webanwendungen ermöglicht.
      </>,
      'Ich habe einen Bachelor-Abschluss in digitaler Medientechnik vom Blekinge Institut für Technologie.',
    ],
  },
  footer: {
    contactHeading: 'Kontakt',
  },
}

export const en: Translations = {
  intro: {
    heading: 'Looking for help with your website development?',
    subheading: 'Feel free to get in touch.',
    byline: 'Patrik Hultgren, freelance web developer based in Stockholm.',
    emailLabel: 'Email info@patrikhultgren.se',
    phoneLabel: 'or call +46 708-44 53 41',
  },
  projects: {
    heading: 'Projects',
    subheading: 'A selection of projects',
    imageAlt: (key) => `${key} web app`,
  },
  knowledge: {
    heading: 'Skills',
  },
  about: {
    heading: 'About me',
    body: [
      "Since 2006 I have worked as an IT consultant in web development with experience across many different projects and technologies. I have worked in book retail, horse racing & gaming, newspapers, industry and politics. For me it is important to understand the end user's needs and deliver user-friendly, fast and good-looking solutions. A well-structured codebase that is easy to understand and extend is equally important.",
      <>
        I am a driven frontend developer used to managing projects from start to
        finish. Technologies I frequently use are <strong>React</strong> and{' '}
        <strong>Next.js</strong>. My focus is on{' '}
        <strong>JavaScript</strong> as it enables user-friendly web
        applications.
      </>,
      "I hold a Bachelor's degree in Digital Media Technology from Blekinge Institute of Technology.",
    ],
  },
  footer: {
    contactHeading: 'Contact',
  },
}
