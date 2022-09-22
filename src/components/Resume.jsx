import Image from 'next/future/image'
// import { Button } from '@/components/Button'

import agnicoeagle from '@/images/logos/agnico-eagle.svg'
import csob from '@/images/logos/csob.svg'
import solidwhite from '@/images/logos/solid-white.svg'
import uqat from '@/images/logos/uqat.svg'

export default function Resume() {
  let resume = [
    {
      company:
        'Université du Québec en Abitibi-Témiscamingue (Rouyn-Noranda, Québec)',
      title: 'Chargé de projet en technologies éducatives',
      logo: uqat,
      start: '2021',
      end: 'Présent',
    },
    {
      company:
        'Université du Québec en Abitibi-Témiscamingue (Rouyn-Noranda, Québec)',
      title: 'Chargé de cours',
      logo: uqat,
      start: '2017',
      end: 'Présent',
    },
    {
      company:
        'Université du Québec en Abitibi-Témiscamingue (Rouyn-Noranda, Québec)',
      title: 'Conseiller en pédagogie universitaire',
      logo: uqat,
      start: '2017',
      end: '2021',
    },
    {
      company:
        'Université du Québec en Abitibi-Témiscamingue (Rouyn-Noranda, Québec)',
      title: 'Conseiller pédagogique - volet technopédagogie',
      logo: uqat,
      start: '2015',
      end: '2017',
    },
    {
      company: "Commission scolaire de l’Or-et-des-Bois (Val-d'Or, Québec)",
      title: 'Enseignant au secondaire en univers social',
      logo: csob,
      start: '2008',
      end: '2015',
    },
    {
      company: "Commission scolaire de l’Or-et-des-Bois (Val-d'Or, Québec)",
      title: 'Superviseur de stage en formation aux métiers semi-spécialisés',
      logo: csob,
      start: '2008',
      end: '2015',
    },
    {
      company: "Travailleur autonome (Val-d'Or, Québec)",
      title: 'Enseignant en soutien scolaire privé en histoire et géographie',
      logo: solidwhite,
      start: '2011',
      end: '2015',
    },
    {
      company: 'Collège Paul-Langevin (Sainte-Savine, France)',
      title: 'Enseignant-stagiaire',
      logo: solidwhite,
      start: 'avril 2009; avril 2010',
      end: ' avril 2009; mai 2010',
    },
    {
      company: 'Agnico Eagles Mines Limited (Meadowbank Complex, Nunavut)',
      title: 'Technicien géologue',
      logo: agnicoeagle,
      start: 'avril 2009',
      end: 'août 2009',
    },
    {
      company: 'Access Mining, Projet Éleonore (Baie-James, Québec)',
      title: 'Technicien géologue',
      logo: solidwhite,
      start: 'avril 2008',
      end: 'août 2008',
    },
  ]

  function BriefcaseIcon() {
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
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    )
  }

  function ArrowDownIcon(props) {
    return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
        <path
          d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <div className="mb-12 rounded-2xl border border-zinc-300 p-6 dark:border-zinc-600">
      <h2 className="flex text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Expériences professionnelles</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Poste</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.title}
              </dd>
              <dt className="sr-only">Lieu</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.company}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
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
