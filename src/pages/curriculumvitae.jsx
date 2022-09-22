import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Resume from '@/components/Resume'
import Formation from '@/components/Formation'
import Qualification from '@/components/Qualification'

function CurriculumvitaeSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Curriculumvitae() {
  return (
    <>
      <Head>
        <title>Legare.to - Tommy Légaré - Curriculum Vitae</title>
        <meta name="description" content="Curriculum Vitae" />
      </Head>
      <SimpleLayout title="Curriculum Vitae" intro="">
        <h2></h2>
        <Formation />
        <Qualification />
        <Resume />
        Champs de spécialisation Affiliations Prix et distinctions Activités
        denseignement Recherches actuelles Publications et communications
        Activités professionnelles Technologies et logiciels
      </SimpleLayout>
    </>
  )
}
