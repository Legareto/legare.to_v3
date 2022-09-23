import Image from 'next/future/image'

import pmi from '@/images/logos/pmi.svg'
import solidwhite from '@/images/logos/solid-white.svg'

export default function Affiliation() {
  let affiliation = [
    {
      company: 'Project Management Institute (PMI) et PMI-Montréal',
      title: 'Membre',
      logo: pmi,
    },
    {
      company: 'Société des professeurs d’histoire du Québec (SPHQ)',
      title: 'Membre',
      logo: solidwhite,
    },
    {
      company:
        'Association québécoise pour l’enseignement en univers social (AQEUS)',
      title: 'Membre',
      logo: solidwhite,
    },
    {
      company:
        'Association Québécoise des Utilisateurs d’Outils technologiques à des fins Pédagogiques et Sociales (AQUOPS)',
      title: 'Membre',
      logo: solidwhite,
    },
  ]

  function AffiliationIcon() {
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
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
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
        <AffiliationIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Affiliations</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {affiliation.map((affiliation, titleIndex) => (
          <li key={titleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-16 flex-none items-center justify-center shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={affiliation.logo}
                alt=""
                className="h-10 w-16 p-1"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Organisation</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {affiliation.company}{' '}
              </dd>
              <dt className="sr-only">Titre</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {affiliation.title}
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
