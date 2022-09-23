import React, { Fragment } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SocialLink } from './profil'
import { MailIcon } from './profil'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Tommy Légaré (Legare.to)</title>
        <meta name="description" content="Contact" />
      </Head>
      <SimpleLayout title="Contact" intro="">
        <div className="space-y-20">
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
              className="mt-8 border-t border-zinc-300 fill-teal-500 pt-8 dark:border-zinc-700/40"
            >
              Tommy.Legare@uqat.ca
            </SocialLink>
          </ul>
        </div>
      </SimpleLayout>
    </>
  )
}
