import image from 'media/patrik-hultgren.png'
import Container from 'components/Container'
import type { Translations } from 'translations'

type Props = { t: Translations['about'] }

export default function About({ t }: Props) {
  return (
    <article className="py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-8">
          <div className="col-span-6 relative">
            <h2 className="text-4xl md:text-6xl font-light font-karma">
              {t.heading}
            </h2>
            <figure className="absolute left-[150px] -top-4 block md:hidden">
              <img
                src={image.src}
                className="grayscale w-[60px] h-[60px]"
                alt="Porträtt av Patrik Hultgren"
                title="Patrik Hultgren"
              />
            </figure>
            {t.body.map((paragraph, i) => (
              <p key={i} className={i === 0 ? 'text-xl mt-4' : 'text-lg mt-4'}>
                {paragraph}
              </p>
            ))}
          </div>
          <figure className="col-span-2 md:place-self-center hidden md:block">
            <img
              src={image.src}
              className="grayscale md:ml-8 mt-8"
              alt="Porträtt av Patrik Hultgren"
              title="Patrik Hultgren"
            />
          </figure>
        </div>
      </Container>
    </article>
  )
}
