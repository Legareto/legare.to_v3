import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function PublicationsSection({ children, ...props }) {
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

export default function Publications() {
  return (
    <>
      <Head>
        <title>Legare.to - Tommy Légaré - Publications</title>
        <meta name="description" content="Publications et communications" />
      </Head>
      <SimpleLayout title="Publications et communications" intro="">
        <div className="space-y-20">
          <PublicationsSection title="Articles dans des actes de colloque avec comité de lecture">
            <Appearance
              href="http://doi.org/10.5281/zenodo.3804256"
              title="Fostering Student Success: The Need for Innovating the Pedagogical Redesign of an Online Learning Course"
              description="Koné, E. Y., Boudreau-Trudel, B. et Légaré, T. (2020). Fostering Student Success: The Need for Innovating the Pedagogical Redesign of an Online Learning Course. Dans Brown, M., Nic Giolla Mhichil, M., Beirne, E., Costello, E. (dir.). Proceedings of the 2019 ICDE World Conference on Online Learning, Volume 2. Presented at the World Conference on Online Learning 2019 (WCOL) (p. 147). Dublin, Irelande : Zenodo. http://doi.org/10.5281/zenodo.3804256"
              event="World Conference on Online Learning 2019 (WCOL)"
              cta="Consulter"
            />
            <Appearance
              href="#"
              title="Lessons learned from our first product recall"
              description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
              event="Business of Startups 2020"
              cta="Watch video"
            />
          </PublicationsSection>
          <PublicationsSection title="Communications scientifiques et professionnelles avec comité de lecture">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Bootstrapping an aerospace company to $17M ARR"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            />
          </PublicationsSection>
          <PublicationsSection title="Communications professionnelles sans comité de lecture">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
          </PublicationsSection>
          <PublicationsSection title="Rapports de recherche">
            <Appearance
              href=""
              title="Développer sa compétence à interpréter les réalités sociales à l'aide de la méthode historique : enquête sur l'impact de l'utilisation du film de fiction historique comme source documentaire dans une tâche adoptant l'approche par problème en classe d'histoire au secondaire"
              description="Légaré, T. (2011). Développer sa compétence à interpréter les réalités sociales à l'aide de la méthode historique : enquête sur l'impact de l'utilisation du film de fiction historique comme source documentaire dans une tâche adoptant l'approche par problème en classe d'histoire au secondaire. Rapport de projet de stage. Université du Québec en Abitibi-Témiscamingue. Document inédit."
              event="Rapport de projet de stage (UQAT)"
              cta=""
            />
          </PublicationsSection>
          <PublicationsSection title="Entrevues diffusées">
            <Appearance
              href=""
              title="La formation à distance au service des entrepreneurs"
              description="Lapointe, S. et Légaré, T. (2021, 27 janvier). La formation à distance au service des entrepreneurs. Chronique Partenaires de la Maison de l'Entrepreneur (CFLO La radio des Hautes-Laurentides). Intervieweur : Audrey Gosselin."
              event="Chronique Partenaires de la Maison de l'Entrepreneur (CFLO La radio des Hautes-Laurentides)"
              cta=""
            />
            <Appearance
              href=""
              title="Selon l'OCDE, les outils numériques ne sont pas garants de réussite des élèves"
              description=" Légaré, T. (2015, 15 septembre). Selon l'OCDE, les outils numériques ne sont pas garants de réussite des élèves. Le radio magazine (Radio-Canada). Intervieweur : Karine Hébert."
              event="Le radio magazine (Radio-Canada)"
              cta=""
            />
          </PublicationsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
