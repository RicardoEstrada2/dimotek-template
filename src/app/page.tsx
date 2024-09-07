import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'

import react from '@/images/clients/dev-icons/react.png'
import python from '@/images/clients/dev-icons/python.png'
import njs from '@/images/clients/dev-icons/node.png'
import dnet from '@/images/clients/dev-icons/dot-net.png'
import javaScript from '@/images/clients/dev-icons/js.png'
import php from '@/images/clients/dev-icons/php.png'


import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

const langs = [
  ['React', react],
  ['Python', python],
  ['NodeJS', njs],
  ['.Net', dnet],
  ['JavaScript', javaScript],
  ['PHP', php],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl background-dimotek py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Tenemos Experiencia en diversas tecnologias, tales como:
          </h2>
          <div className="h-px flex-auto bg-white" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {langs.map(([name, logo], index) => (
              <li key={index}>
                <FadeIn>
                  <div className='flex items-center gap-x-8'>
                    <Image src={logo} alt={name.toString()} unoptimized />
                    <span className='text-white'>{name.toString()}</span>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        eyebrow="Soluciones"
        title="Conoces nuestra gama de soluciones de Software como Servicio (SaaS)"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Al usar nuestras soluciones te permitirán reducir los costos de infraestructura, simplificar el acceso y gestión de software, y facilitar la colaboración remota entre tus equipos de trabajo.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className=""
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  {/*<time*/}
                  {/*  dateTime={caseStudy.date.split('-')[0]}*/}
                  {/*  className="font-semibold"*/}
                  {/*>*/}
                  {/*  {caseStudy.date.split('-')[0]}*/}
                  {/*</time>*/}
                  {/*<span className="text-neutral-300" aria-hidden="true">*/}
                  {/*  /*/}
                  {/*</span>*/}
                  <span>{caseStudy.client}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Servicios"
        title="Te ayudamos a identificar la tecnología correcta para tu proyecto."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nuestra amplia experiencia nos permite atender todo tipo de requerimiento, ya sea grande o pequeño, siempre con el mismo nivel de profesionalismo y dedicación.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            {/*<FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">*/}
            {/*  <StylizedImage*/}
            {/*    src={imageLaptop}*/}
            {/*    sizes="(min-width: 1024px) 41rem, 31rem"*/}
            {/*    className="justify-center lg:justify-end"*/}
            {/*  />*/}
            {/*</FadeIn>*/}
            <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
              <ListItem title="Web development">
                Manejamos múltiples lenguajes de programación brindando soluciones web innovadoras en función a las necesidades de su negocio.
              </ListItem>
              <ListItem title="Integraciones & API">
                Nuestros servicios avanzados en integraciones de API permiten comunicar cualquier  software, bases de datos, aplicaciones y herramientas digitales.
              </ListItem>
              <ListItem title="DevOps">
                Ofrecemos un conjunto completo de servicios DevOps diseñados para acelerar su ciclo de desarrollo como: Pipelines, Infraestructura y Seguridad.
              </ListItem>
              {/*<ListItem title="Custom content management">*/}
              {/*  At Studio we understand the importance of having a robust and*/}
              {/*  customised CMS. That’s why we run all of our client projects out*/}
              {/*  of a single, enormous Joomla instance.*/}
              {/*</ListItem>*/}
            </List>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="eCommerce">
              Ofrecemos soluciones integrales de comercio electrónico, plataformas Headless, diseño web, integración con pasarelas de pago, antifraudes entro otra herramientas.
            </ListItem>
            <ListItem title="iOS & Android">
              Ya sea que necesite una aplicación nativa, híbrida o multiplataforma, ofrecemos soluciones adaptadas a las necesidades de su proyecto en dispositivos iOS y Android.
            </ListItem>
            <ListItem title="Automatizaciones ">
              Somos un empresa Full Stack que combina las Tecnologías de última generación, brindando experiencias únicas a los proyectos de nuestros clientes.
            </ListItem>
            {/*<ListItem title="Custom content management">*/}
            {/*  At Studio we understand the importance of having a robust and*/}
            {/*  customised CMS. That’s why we run all of our client projects out*/}
            {/*  of a single, enormous Joomla instance.*/}
            {/*</ListItem>*/}
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
            Agencia Digital con operaciones en Norte América, Latam & Europa.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Somos un empresa Full Stack que combina las Tecnologías de última generación brindando experiencias únicas a los proyectos de nuestros clientes.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
