import Image from 'next/future/image'

import teluq from '@/images/logos/teluq.svg'
import uqat from '@/images/logos/uqat.svg'

export default function Prix() {
  let prix = [
    {
      key: '4',
      company: 'i-mersion CP',
      prix: "Prix HUBLO, Pratique finaliste, Fiches technopédagogiques des environnements physiques d'apprentissage, Service de pédagogie universitaire et de formation à distance, UQAT",
      logo: uqat,
      end: '2023',
    },
    {
      key: '3',
      company: 'Université du Québec en Abitibi-Témiscamingue',
      prix: "Mention d'excellence en enseignement, DID2120, UER en sciences de l'éducation",
      logo: uqat,
      end: 'Automne 2020',
    },
    {
      key: '2',
      company: 'Université TÉLUQ',
      prix: "Certificat d'excellence, Programme court de 2e cycle en technologie éducative",
      logo: teluq,
      end: '2019',
    },
    {
      key: '1',
      company: 'Université du Québec en Abitibi-Témiscamingue',
      prix: "Mention d'excellence en enseignement, HIS2136, UER en sciences de l'éducation",
      logo: uqat,
      end: 'Hiver 2019',
    },
    {
      key: '0',
      company: 'Université du Québec en Abitibi-Témiscamingue',
      prix: "Mention d'excellence en enseignement, DID2120, UER en sciences de l'éducation",
      logo: uqat,
      end: 'Automne 2017',
    },
  ]

  function PrixIcon() {
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
          d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
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
        <PrixIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Prix et distinctions</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {prix.map((prix, prixIndex) => (
          <li key={prixIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-16 flex-none items-center justify-center shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={prix.logo}
                alt=""
                className="h-10 w-16 p-1"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Prix</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {prix.prix}
              </dd>
              <dt className="sr-only">Institution</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {prix.company}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${prix.end.label ?? prix.end}`}
              >
                <time dateTime={prix.end.dateTime ?? prix.end}>
                  {prix.end.label ?? prix.end}
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
