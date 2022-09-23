import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

export function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-blue-800 transition hover:text-teal-500 dark:text-teal-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-blue-800 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function Profil() {
  return (
    <div>
      <Head>
        <title>Profil - Tommy Légaré (Legare.to)</title>
        <meta name="description" content="Tommy Légaré" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-teal-500 dark:text-teal-400  sm:text-5xl">
              Tommy Légaré
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Tommy Légaré est chargé de projet en technologies éducatives
                pour le service de pédagogique universitaire et de formation à
                distance (SPUFAD) et également chargé de cours à l&apos;unité
                d&apos;enseignement et de recherche (UER) des sciences de
                l&apos;éducation de l&apos;UQAT où il enseigne
                l&apos;intégration des TIC, la didactique de l&apos;univers
                social et l&apos;histoire du Québec et du Canada.
              </p>
              <p>
                Enseignant d’histoire et de géographie de formation, il est
                aussi diplômé de la TÉLUQ en technologie éducative. Comme chargé
                de projet, il initie, collabore et accompagne
                l&apos;institution, les chargé.es de cours et les professeur.es
                pour différentes questions en lien avec l’enseignement et les
                technologies. Il a travaillé sur plus d’une trentaine de projets
                technologiques et des projets de formation à distance en mode
                synchrone, asynchrone et hybride.
              </p>
              <p>
                Tommy s&apos;intéresse particulièrement à la gestion de projets
                et à la gestion de produits éducatifs en contexte agile. Il est
                certifié <i>PMI Agile Practionner (PMI-ACP)</i> et{' '}
                <i>Disciplined Agile Scrum Master (DASM)</i> par le{' '}
                <i>Project Management Institute (PMI)</i>. Il détient également
                plusieurs autres certifications agiles, dont celles de{' '}
                <i>Professional Scrum Master (PSM II)</i> et de{' '}
                <i>Professional Scrum Product Owner (PSPO II)</i>.
              </p>
              <p>
                Épicurien de nature, passionné d’histoire et de pédagogie, Tommy
                est une personne curieuse qui aime chercher, comprendre et
                analyser. Sa soif d’apprendre et son esprit de synthèse font de
                lui un allié pédagogique hors pair pour vos projets. Ses
                collègues disent de lui qu’il est communicateur, rêveur, ouvert,
                méthodique et drôle. N&apos;Hésitez pas à le contacter pour
                discuter avec lui de vos projets!
              </p>
              <Button
                href="/curriculumvitae"
                variant="primary"
                className="group mt-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
                Curriculum vitae
              </Button>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/legaretommy"
                icon={TwitterIcon}
              >
                Me suivre sur Twitter
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/tommylegare/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Me suivre sur LinkedIn
              </SocialLink>
              {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Me suivre sur Instagram
              </SocialLink> */}
              <SocialLink
                href="https://github.com/Legareto"
                icon={GitHubIcon}
                className="mt-4"
              >
                Me suivre sur GitHub
              </SocialLink>
              <SocialLink
                href="mailto:Tommy.Legare@uqat.ca"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 fill-teal-500 pt-8 dark:border-zinc-700/40"
              >
                Tommy.Legare@uqat.ca
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
