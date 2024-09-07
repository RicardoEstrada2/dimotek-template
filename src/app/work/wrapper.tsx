import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export default async function CaseStudyLayout({
  caseStudy,
  children,
}: {
  caseStudy: MDXEntry<CaseStudy>
  children: React.ReactNode
}) {
  let allCaseStudies = await loadCaseStudies()
  let moreCaseStudies = allCaseStudies
    .filter(({ metadata }) => metadata !== caseStudy)
    .slice(0, 2)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow={caseStudy.client_esp} title={caseStudy.title} centered>
            <p>{caseStudy.description}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-b border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Solución</dt>
                      <dd>{caseStudy.client_esp}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Fecha de fundación</dt>
                      <dd>
                        <time dateTime={caseStudy.date_esp}>
                          {caseStudy.date_esp}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Sitio Oficial</dt>
                      <dd>
                        <Link href={caseStudy.url}>{caseStudy.service}</Link>
                      </dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            {/*<div className="border-y border-neutral-200 bg-neutral-100">*/}
            {/*  <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">*/}
            {/*<GrayscaleTransitionImage*/}
            {/*  {...caseStudy.image}*/}
            {/*  quality={90}*/}
            {/*  className="w-full"*/}
            {/*  sizes="(min-width: 1216px) 76rem, 100vw"*/}
            {/*  priority*/}
            {/*/>*/}

            {/*  </div>*/}
            {/*</div>*/}
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-20">
          <FadeIn>
            <div
              className={clsx(
                '[&>*]:mx-auto [&>*]:max-w-3xl mb-10',
              )}
            >
              <Image
                  src={caseStudy.logo}
                  alt={caseStudy.client}
                  className=""
                  unoptimized
              />
            </div>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="Otras Soluciones"
          pages={moreCaseStudies}
        />
      )}

      <ContactSection />
    </>
  )
}
