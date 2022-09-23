import React, { Fragment } from 'react'

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
        <title>Publications - Tommy Légaré (Legare.to)</title>
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
              href="https://www.researchgate.net/publication/321832978"
              title="Quand les TIC et la formation à distance médiatisée absorbent l’isolement géographique des salles de cours à l’UQAT"
              description="Koné, E. Y., Légaré, T. et Richer, K. (2017). Quand les TIC et la formation à distance médiatisée absorbent l’isolement géographique des salles de cours à l’UQAT. Actes de colloque de la Communauté pour l'Innovation et la Recherche sur les Technologies dans l'enseignement/Apprentissage (CIRTA). Montréal, Québec : Université du Québec à Montréal (pp. 75-78). https://www.researchgate.net/publication/321832978"
              event="Communauté pour l'Innovation et la Recherche sur les Technologies dans l'enseignement/Apprentissage (CIRTA)"
              cta="Consulter"
            />
          </PublicationsSection>
          <PublicationsSection title="Communications scientifiques et professionnelles avec comité de lecture">
            <Appearance
              href="https://youtu.be/LQhr8lK0LEM"
              title="Conception d'un lightboard pour une FAD fun et efficace"
              description=" Boudreault-Trudel, B., Légaré, T. et Charette, F. (2020, 4 novembre). Conception d'un lightboard pour une FAD fun et efficace. Communication présentée aux Ateliers REFAD. Réseau d’enseignement francophone à distance du Canada (REFAD). https://youtu.be/LQhr8lK0LEM"
              event="Réseau d’enseignement francophone à distance du Canada (REFAD)"
              cta="Visionner"
            />
            <Appearance
              href="http://doi.org/10.5281/zenodo.3804256"
              title="Fostering Student Success: The Need for Innovating the Pedagogical Redesign of an Online Learning Course"
              description=" Koné, E. Y., Boudreau-Trudel, B. et Légaré, T. (2019). Fostering Student Success: The Need for Innovating the Pedagogical Redesign of an Online Learning Course. Communication présentée au World Conference on Online Learning 2019, 3-7 novembre 2019, Convention Centre Dublin, Irlande. http://doi.org/10.5281/zenodo.3804256"
              event="World Conference on Online Learning 2019 (WCOL)"
              cta="Consulter"
            />
            <Appearance
              href=""
              title="Bonnes pratiques d’encadrement en formation à distance : pourquoi le tuteur est-il au cœur des dispositifs de formation à distance?"
              description="Koné, E. Y. et Légaré, T. (2018). Bonnes pratiques d’encadrement en formation à distance : pourquoi le tuteur est-il au cœur des dispositifs de formation à distance?. Communication présentée au 1er colloque scientifique international sur l’innovation pédagogique et le développement professionnel, 17-19 juillet 2018, Palais des congrès de Yaoundé, Cameroun."
              event="1er colloque scientifique international sur l’innovation pédagogique et le développement professionnel"
              cta=""
            />
            <Appearance
              href=""
              title="E-Learning et formation en présentiel : A-t-on encore besoin d’un campus en présentiel au 21e siècle?"
              description="Koné, E. Y. et Légaré, T. (2018). E-Learning et formation en présentiel : A-t-on encore besoin d’un campus en présentiel au 21e siècle?. Proposition d’un modèle systémique de gestion de l’intégration des TIC en contexte universitaire. Communication présentée au 7e colloque international du Réseau International Francophone des Établissements de formation de formateurs (RIFEFF), 5-7 juillet 2018, Université de Cergy-Pontoise, France."
              event="Réseau International Francophone des Établissements de formation de formateurs (RIFEFF)"
              cta=""
            />
            <Appearance
              href="https://www.researchgate.net/publication/321832978"
              title="Quand les TIC et la formation à distance médiatisée absorbent l’isolement géographique des salles de cours à l’UQAT"
              description="Koné, E. Y., Légaré, T. et Richer, K. (2017). Quand les TIC et la formation à distance médiatisée absorbent l’isolement géographique des salles de cours à l’UQAT. Communication présentée au colloque international de la Communauté pour l'Innovation et la Recherche sur les Technologies dans l'enseignement/Apprentissage (CIRTA), 10-11 octobre 2017, Université du Québec à Montréal (UQAM), Montréal, Québec. https://www.researchgate.net/publication/321832978"
              event="Communauté pour l'Innovation et la Recherche sur les Technologies dans l'enseignement/Apprentissage (CIRTA)"
              cta="Consulter"
            />
          </PublicationsSection>
          <PublicationsSection title="Communications professionnelles sans comité de lecture">
            <Appearance
              href=""
              title="Que peut vous apporter le logiciel Microsoft OneNote?"
              description="Légaré, T. (2021, 23 avril). Que peut vous apporter le logiciel Microsoft OneNote?. Communication présentée aux Activités scientifiques en sciences de la santé. UER en sciences de la santé, Université du Québec en Abitibi-Témiscamingue (UQAT)."
              event="Activités scientifiques en sciences de la santé (UQAT)"
              cta=""
            />
            <Appearance
              href="https://legareto.github.io/legare.to/telechargements/OBS_presentation_GRIIP.pdf"
              title="Enseigner à distance avec OBS : augmenter le dynamisme de son cours"
              description="Hernandez, F. et Légaré, T. (2021, 13 avril). Enseigner à distance avec OBS : augmenter le dynamisme de son cours. Communication présentée au GRIIP. Groupe d'intervention et d’innovation pédagogique (GRIIP). https://legareto.github.io/legare.to/telechargements/OBS_presentation_GRIIP.pdf"
              event="Groupe d'intervention et d’innovation pédagogique (GRIIP)"
              cta="Consulter"
            />
            <Appearance
              href=""
              title="PowerPoint : principes et astuces simples pour réaliser des présentations mémorables"
              description="Légaré, T. (2020, 4 décembre). PowerPoint : principes et astuces simples pour réaliser des présentations mémorables. Communication présentée aux Activités scientifiques en sciences de la santé. UER en sciences de la santé, Université du Québec en Abitibi-Témiscamingue (UQAT)."
              event="Activités scientifiques en sciences de la santé (UQAT)"
              cta=""
            />
            <Appearance
              href=""
              title="Bonnes pratiques d'encadrement en FAD à l’UQAT : pourquoi le tuteur est-il au cœur du dispositif de formation à distance?"
              description="Koné, E. Y. et Légaré, T. (2018, 1er mai). Bonnes pratiques d'encadrement en FAD à l’UQAT : pourquoi le tuteur est-il au cœur du dispositif de formation à distance?. Communication présentée aux Ateliers d’échanges pédagogiques. Université du Québec en Abitibi-Témiscamingue, Rouyn-Noranda, Québec."
              event="Ateliers d’échanges pédagogiques (UQAT)"
              cta=""
            />
            <Appearance
              href=""
              title="A-t-on encore besoin d’un campus en présentiel au XXIe siècle?"
              description="Koné, E. Y. et Légaré, T. (2018, 14 février). A-t-on encore besoin d’un campus en présentiel au XXIe siècle?. Communication présentée aux Ateliers d’échanges pédagogiques. Université du Québec en Abitibi-Témiscamingue, Rouyn-Noranda, Québec."
              event="Ateliers d’échanges pédagogiques (UQAT)"
              cta=""
            />
            <Appearance
              href=""
              title="L’utilisation d’un environnement numérique d’apprentissage pour l’enseignement des mathématiques : la plateforme Netmath"
              description="Légaré, T. (2017, 20 février). L’utilisation d’un environnement numérique d’apprentissage pour l’enseignement des mathématiques : la plateforme Netmath. Communication présentée dans le cadre du cours STA4147. Université du Québec en Abitibi-Témiscamingue, Rouyn-Noranda, Québec."
              event="Conférence dans le cadre du cours STA4147 (UQAT)"
              cta=""
            />
            <Appearance
              href=""
              title="Scénarisation et production de capsules vidéo pédagogiques"
              description="Légaré, T. et Rail, J. (2017, 5 janvier). Scénarisation et production de capsules vidéo pédagogiques. Communication présentée aux Journées pédagogiques. Cégep de l'Abitibi-Témiscamingue, Rouyn-Noranda, Québec."
              event="Journées pédagogiques (Cégep de l'Abitibi-Témiscamingue)"
              cta=""
            />
            <Appearance
              href=""
              title="L’environnement numérique d’apprentissage et les pratiques émergentes"
              description="Légaré, T. (2016, 4 mai). L’environnement numérique d’apprentissage et les pratiques émergentes. Communication présentée à L’événement régional sur la formation à distance de la Table interordres en éducation de l'Abitibi-Témiscamingue. Université du Québec en Abitibi-Témiscamingue, Rouyn-Noranda, Québec."
              event="Table interordres en éducation de l'Abitibi-Témiscamingue"
              cta=""
            />
            <Appearance
              href=""
              title="L’utilisation des tablettes dans l’enseignement des disciplines du domaine de l’univers social au secondaire"
              description="Légaré, T. (2015, 5 novembre). L’utilisation des tablettes dans l’enseignement des disciplines du domaine de l’univers social au secondaire. Communication présentée au cours DID2120. Université du Québec en Abitibi-Témiscamingue, Rouyn-Noranda, Québec."
              event="Communication dans le cadre du cours DID2120 (UQAT)"
              cta=""
            />
            <Appearance
              href=""
              title="L'intégration des technologies de l'information et de la communication dans l’enseignement des disciplines du domaine de l'univers social au secondaire"
              description="Légaré, T. (2015, 5 novembre). L'intégration des technologies de l'information et de la communication dans l’enseignement des disciplines du domaine de l'univers social au secondaire. Communication présentée au cours DID2120. Université du Québec en Abitibi-Témiscamingue, Rouyn-Noranda, Québec."
              event="Communication dans le cadre du cours DID2120 (UQAT)"
              cta=""
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
