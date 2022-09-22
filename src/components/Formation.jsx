import Image from 'next/future/image'

import teluq from '@/images/logos/teluq.svg'
import uqat from '@/images/logos/uqat.svg'

export default function Formation() {
  let formation = [
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title: 'Maîtrise en éducation, M. Ed. [en cours, scolarité terminée]',
      logo: uqat,
      end: 'En cours',
    },
    {
      company: 'Université TÉLUQ',
      title: 'Programme court de 2e cycle en technologie éducative',
      logo: teluq,
      end: '2018',
    },
    {
      company: 'Université du Québec en Abitibi-Témiscamingue',
      title:
        'Baccalauréat en enseignement secondaire profil univers social (B. Ed.)',
      logo: uqat,
      end: '2011',
    },
  ]

  function AcademicIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
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
        <AcademicIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Formation académique</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {formation.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Diplôme</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.title}
              </dd>
              <dt className="sr-only">Institution</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.company}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.end.label ?? role.end}`}
              >
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
