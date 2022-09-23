import React, { Fragment } from 'react'

import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function EnseignementSection({ children, ...props }) {
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

export default function Enseignement() {
  return (
    <>
      <Head>
        <title>Enseignement - Tommy Légaré (Legare.to)</title>
        <meta name="description" content="Enseignement universitaire" />
      </Head>
      <SimpleLayout title="Enseignement universitaire" intro="">
        <div className="space-y-20">
          <EnseignementSection title="Premier cycle, 3 crédit(s)">
            <Appearance
              href="https://www.uqat.ca/etudes/cours/?code=EDU2205"
              title="EDU2205 - L'univers social comme object d'apprentissage"
              description="Acquisition de concepts, de notions et de méthodologies en géographie et en histoire avec une attention particulière aux réalités sociales et territoriales du Québec. Étude des sociétés autochtones, de la Nouvelle-France, des treize colonies, des transformations Québec-Canada jusqu’aux lendemains de la Révolution Tranquille. Compréhension des rouages des changements sociaux, territoriaux et environnementaux à partir de cadres théoriques empruntés aux sciences sociales. Réflexion sur l’univers social québécois par la pratique du dialogue, dans la perspective du vivre-ensemble et l’éducation interculturelle. Introduction au pluralisme culturel et aux enjeux de l’intégration de l’équité, de la diversité et de l’inclusion dans l’école québécoise. Sensibilisation à toute l’importance de l’exercice de la citoyenneté dans la perspective de l’écocitoyenneté au XXIème siècle. Introduction au développement des compétences informationnelles en sciences sociales."
              event="Sciences de l'éducation"
              cta="En savoir plus"
            />
            <Appearance
              href="https://www.uqat.ca/etudes/cours/?code=DID2120"
              title="DID2120 - TIC, didactique et méthodologie dans l'univers social"
              description="Les méthodes de recherche propres aux disciplines de l’univers social (histoire, géographie et éducation à la citoyenneté). L’utilisation des TIC dans la mise en œuvre de la démarche de recherche en univers social. Dépouillement, analyse critique et utilisation de ressources technologiques pour l’enseignement et l’apprentissage des disciplines de l’univers social. Étude et expérimentation des diverses fonctions des TIC (recherche, création, évaluation, communication, traitement de l’information) à des fins d’apprentissage et d’enseignement des disciplines de l’univers social. Avantages et limites des TIC dans l’enseignement de l’univers social. Enjeux et défis pour l’enseignant et l’élève. Partage et échange d’information via différentes formes de réseaux. Intégration des domaines généraux de formation et des compétences transversales à l’aide des TIC."
              event="Sciences de l'éducation"
              cta="En savoir plus"
            />
            <Appearance
              href="https://www.uqat.ca/etudes/cours/?code=GEO2107"
              title="GEO2107 - Le rôle du Canada au 21e siècle à travers la géographie"
              description="Analyse comparative des enjeux géographiques locaux, régionaux, nationaux et internationaux. La géographie historique, humaine, sociale, économique, culturelle et physique dans une perspective canadienne. L'influence des organismes et des institutions mondiales et continentales sur le Canada. L'impact de l'agriculture moderne sur l'environnement au Canada et ailleurs dans le monde. Les enjeux climatiques modernes et les traités de protection de l'environnement. Sources d'énergie, innovations technologiques et sauvegarde de l'environnement. Ethnicité et enjeux géographiques. Le rôle du Canada dans le développement géoéconomique des pays en développement et les rapports Nord-Sud. Les conséquences des conflits internationaux et des migrations humaines au Canada. L'eau comme facteur de conflit. L'impact de la mondialisation dans une perspective géographique."
              event="Sciences de l'éducation"
              cta="En savoir plus"
            />
            <Appearance
              href="https://www.uqat.ca/etudes/cours/?code=HIS2136"
              title="HIS2136 - Histoire du Québec et du Canada : de 1867 à aujourd’hui"
              description="Histoire du Québec et du Canada depuis la Confédération à travers l’historiographie. L’Acte de l'Amérique du Nord britannique et ses incidences. Le partage des pouvoirs. Les débats et les enjeux constitutionnels depuis la Confédération. L’évolution des frontières géographiques délimitant le Québec et l’ensemble canadien. Les provinces canadiennes, leurs particularités et leurs impacts sur le développement social, économique, politique, culturel et religieux. La participation canadienne et québécoise lors des deux conflits mondiaux. La crise économique de 1929. Le Refus global et l’influence religieuse. La Révolution tranquille. La crise d’Octobre. De l’affirmation canadienne au nationalisme québécois. L’immigration, la culture nationale et la démographie. L’affirmation autochtone. Les mouvements sociaux. Le Québec et le Canada sur la scène internationale. Les techniques de collecte et les méthodes d’analyse des données. L’interdisciplinarité en univers social."
              event="Sciences de l'éducation"
              cta="En savoir plus"
            />
          </EnseignementSection>
        </div>
      </SimpleLayout>
    </>
  )
}
