import Container from 'primitives/Container'

export default function Knowledge() {
  return (
    <section
      className="py-12 bg-white border-t border-slate-200"
      aria-labelledby="knowledge-title"
    >
      <Container>
        <h2
          className="text-4xl md:text-4xl font-light font-karma"
          id="knowledge-title"
        >
          Kunskaper
        </h2>
        <ul className="flex text-xl md:text-2xl font-light flex-wrap [&>li]:mt-3 list-none gap-x-8">
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind</li>
          <li>Redux-Saga</li>
          <li>Scrum</li>
          <li>Kubernetes</li>
          <li>Docker</li>
        </ul>
      </Container>
    </section>
  )
}