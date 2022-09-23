import Image from 'next/future/image'

import teluq from '@/images/logos/teluq.svg'
import uqat from '@/images/logos/uqat.svg'
import quebec from '@/images/logos/quebec.svg'
import google from '@/images/logos/google.svg'
import microsoft from '@/images/logos/microsoft.svg'
import freecodecamp from '@/images/logos/freecodecamp.svg'
import scrumorg from '@/images/logos/scrumorg.svg'
import pmi from '@/images/logos/pmi.svg'

export default function Qualification() {
  let qualification = [
    {
      company: 'Project Management Institute (PMI)',
      title: 'PMI Agile Certified Professional (PMI-ACP)',
      logo: pmi,
      end: '2022',
    },
    {
      company: 'Project Management Institute (PMI)',
      title: 'Disciplined Agile Scrum Master (DASM)',
      logo: pmi,
      end: '2022',
    },
    {
      company: 'Scrum.org',
      title: 'Professional Agile Leadership Essentials (PAL-E)',
      logo: scrumorg,
      end: '2022',
    },
    {
      company: 'Scrum.org',
      title: 'Professional Scrum Product Owner II (PSPO II)',
      logo: scrumorg,
      end: '2022',
    },
    {
      company: 'Scrum.org',
      title: 'Professional Scrum Product Owner I (PSPO I)',
      logo: scrumorg,
      end: '2022',
    },
    {
      company: 'Scrum.org',
      title: 'Professional Scrum Master II (PSM II)',
      logo: scrumorg,
      end: '2022',
    },
    {
      company: 'Scrum.org',
      title: 'Professional Scrum Master I (PSM I)',
      logo: scrumorg,
      end: '2022',
    },
    {
      company: 'FreeCodeCamp',
      title: 'Responsive Web Design Developer',
      logo: freecodecamp,
      end: '2020',
    },
    {
      company: 'Google pour Éducation',
      title: 'Google Certified Educator 1',
      logo: google,
      end: '2016',
    },
    {
      company: 'Microsoft pour Éducation',
      title: 'Microsoft Innovative Educator',
      logo: microsoft,
      end: '2016',
    },
    {
      company: 'Ministère de l’Éducation, du Loisir et du Sport',
      title: "Brevet d'enseignement",
      logo: quebec,
      end: '2011',
    },
  ]

  function QualificationIcon() {
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
          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
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
        <QualificationIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Qualifications professionnelles</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {qualification.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-16 flex-none items-center justify-center shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-10 w-16 p-1"
                unoptimized
              />
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
