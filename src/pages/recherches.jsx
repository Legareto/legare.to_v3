import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function RecherchesSection({ children, ...props }) {
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

export default function Recherches() {
  return (
    <>
      <Head>
        <title>Recherches - Tommy Légaré (Legare.to)</title>
        <meta name="description" content="Recherches actuelles" />
      </Head>
      <SimpleLayout title="Recherches actuelles" intro="">
        <div className="space-y-20">
          <RecherchesSection title="2019-2023">
            <Appearance
              href=""
              title="Pratiques réflexives en enseignement universitaire : l'exemple des professeures et professeurs de l'Université du Québec en Abitibi-Témiscamingue [Titre provisoire]"
              description="Chercheur principal : Tommy Légaré; Directeur : Sylvain Beaupré; Organisme subventionnaire : aucune subvention; Diffusion prévue : rapport; Période de réalisation : 2019-2022"
              event="Université du Québec en Abitibi-Témiscamingue"
              cta=""
            />
          </RecherchesSection>
          <RecherchesSection title="2021-2022">
            <Appearance
              href=""
              title="L'apprentissage interculturel/international et collaboratif en ligne (AIICL) : l'expérience d'étudiant(e)s français et québécois [Titre provisoire]"
              description="Chercheur principal : Benoit Bourguignon; Cochercheure : Sandra Mellot (UCO, France, Nantes; Collaborateurs(trices) : Bruno-Philip Richard, Isabelle Rivest et Tommy Légaré; Organisme subventionnaire : aucune subvention; Diffusion prévue : article scientifique; Période de réalisation : 2021-2022"
              event="Université du Québec en Abitibi-Témiscamingue"
              cta=""
            />
            <Appearance
              href=""
              title="TEST"
              description="TEST"
              event="TEST"
              cta=""
            />
          </RecherchesSection>
        </div>
      </SimpleLayout>
    </>
  )
}
