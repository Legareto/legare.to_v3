import Image from 'next/future/image'
// import { Button } from '@/components/Button'

import csob from '@/images/logos/csob.svg'
import solidwhite from '@/images/logos/solid-white.svg'
import uqat from '@/images/logos/uqat.svg'
import uq from '@/images/logos/uq.svg'
import cegepat from '@/images/logos/cegepat.svg'

export default function Activite() {
  let activite = [
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title: 'Membre de la Table Développements numériques',
      logo: uqat,
      start: '2021',
      end: 'Présent',
    },
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title: 'Membre observateur à la Commission des études (CÉ)',
      logo: uqat,
      start: '2018',
      end: 'Présent',
    },
    {
      company: 'Université du Québec',
      title: 'Membre du Groupe de travail ENA du réseau UQ (projet DÉFI)',
      logo: uq,
      start: '2019',
      end: 'Présent',
    },
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title: 'Membre du comité de pédagogie universitaire (CPU)',
      logo: uqat,
      start: '2015',
      end: '2021',
    },
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title:
        'Membre du comité de sélection des Fonds de pédagogie universitaire',
      logo: uqat,
      start: '',
      end: '2016, 2018, 2021',
    },
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title: "Membre du comité sur l'intégrité intellectuelle",
      logo: uqat,
      start: '2017',
      end: '2021',
    },
    {
      company: 'Université du Québec',
      title:
        "Membre du Groupe d'intervention et d'innovation pédagogique (GRIIP)",
      logo: uq,
      start: '2018',
      end: '2021',
    },
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title:
        'Membre du comité de révision du guide méthodologique institutionnel',
      logo: uqat,
      start: '2018',
      end: '2021',
    },
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title: "Membre du Comité sur le droit d'auteur",
      logo: uqat,
      start: '2019',
      end: '2021',
    },
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title:
        'Membre du comité de révision du programme de baccalauréat en enseignement secondaire (BES) profil univers social',
      logo: uqat,
      start: '2018',
      end: '2019',
    },
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title:
        "Membre du comité de programme du microprogramme de 2e cycle en pédagogie de l'enseignement collégial et universitaire",
      logo: uqat,
      start: '2019',
      end: '2019',
    },
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title:
        'Membre du comité de sélection pour les Prix reconnaissance en enseignement universitaire',
      logo: uqat,
      start: '',
      end: '2016, 2018',
    },
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title: 'Membre du comité de développement du Plan stratégique TIC-FAD',
      logo: uqat,
      start: '2016',
      end: '2018',
    },
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title:
        "Membre du comité d'autoévaluation du programme de baccalauréat en enseignement secondaire (BES) profil univers social",
      logo: uqat,
      start: '2014',
      end: '2015',
    },
    {
      company: "Commission scolaire de l'Or-et-des-Bois",
      title: 'Membre du comité TIC',
      logo: csob,
      start: '2014',
      end: '2015',
    },
    {
      company:
        "École secondaire Le Tremplin, Commission scolaire de l'Or-et-des-Bois",
      title:
        'Membre représentant du personnel enseignant au conseil d’établissement (CÉ)',
      logo: csob,
      start: '2014',
      end: '2015',
    },
    {
      company:
        "École secondaire Le Tremplin, Commission scolaire de l'Or-et-des-Bois",
      title: 'Membre du comité pédagogique',
      logo: csob,
      start: '2012',
      end: '2014',
    },
    {
      company:
        "École secondaire Le Tremplin, Commission scolaire de l'Or-et-des-Bois",
      title: 'Membre du comité normes et modalités',
      logo: csob,
      start: '2012',
      end: '2014',
    },
    {
      company: "Commission scolaire de l'Or-et-des-Bois",
      title: 'Membre du comité univers social',
      logo: csob,
      start: '2011',
      end: '2014',
    },
    {
      company: "Cégep de l'Abitibi-Témiscamingue, Campus Val-d'Or",
      title:
        "Vice-président aux affaires internes de l'Association générale étudiante du Cégep de l'Abitibi-Témiscamingue (AGECAT)",
      logo: cegepat,
      start: '2006',
      end: '2007',
    },
  ]

  function ActiviteIcon() {
    return (
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
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    )
  }

  // function ArrowDownIcon(props) {
  //   return (
  //     <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
  //       <path
  //         d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //     </svg>
  //   )
  // }

  return (
    <div className="mb-12 rounded-2xl border border-zinc-300 p-6 dark:border-zinc-600">
      <h2 className="flex text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        <ActiviteIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Activités professionnelles</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {activite.map((activite, activiteIndex) => (
          <li key={activiteIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-16 flex-none items-center justify-center shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={activite.logo}
                alt=""
                className="h-10 w-16 p-1"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Titre</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {activite.title}
              </dd>
              <dt className="sr-only">Groupe</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {activite.company}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${activite.start.label ?? activite.start} until ${
                  activite.end.label ?? activite.end
                }`}
              >
                <time dateTime={activite.start.dateTime ?? activite.start}>
                  {activite.start.label ?? activite.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={activite.end.dateTime ?? activite.end}>
                  {activite.end.label ?? activite.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Télécharger le CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}
