import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-blue-800 transition group-hover:fill-teal-600 dark:fill-blue-400 dark:group-hover:fill-teal-300" />
    </Link>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tommy Légaré (Legare.to)</title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-teal-500 dark:text-teal-400 sm:text-5xl">
            Chargé de projet.
            <br />
            Chargé de cours.
            <br />
            Consultant.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Tommy Légaré est chargé de projet en technologies éducatives pour le
            service de pédagogique universitaire et de formation à distance
            (SPUFAD) et également chargé de cours à l&apos;unité
            d&apos;enseignement et de recherche (UER) des sciences de
            l&apos;éducation de l&apos;UQAT où il enseigne l&apos;intégration
            des TIC, la didactique de l&apos;univers social et l&apos;histoire
            du Québec et du Canada.
          </p>
          <div className="mt-6 flex gap-6 ">
            <SocialLink
              href="https://twitter.com/legaretommy"
              aria-label="Me suivre sur Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/tommylegare/"
              aria-label="Me suivre sur LinkedIn"
              icon={LinkedInIcon}
            />
            {/* <SocialLink
              href="https://instagram.com"
              aria-label="Me suivre sur Research Gate"
              icon={InstagramIcon}
            /> */}
            <SocialLink
              href="https://github.com/Legareto"
              aria-label="Me suivre sur GitHub"
              icon={GitHubIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid">
          {/* max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 */}
          {/* <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div> */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter />
            <Resume /> */}
          </div>
          <div className="text-center">
            <Button
              href="/profil"
              variant="primary"
              className="mr-15 group mt-6"
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Profil
            </Button>
            <Button
              href="/curriculumvitae"
              variant="primary"
              className="group mt-6 ml-12"
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
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }
}
