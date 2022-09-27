import Image from 'next/future/image'

let technologie = [
  {
    key: '1',
    title: 'Langages',
    details: 'HTML, CSS, JavaScript',
  },
  {
    key: '2',
    title: 'Librairies/Framework',
    details: 'Bootstrap, React',
  },
  {
    key: '3',
    title: 'Gestion de versions',
    details: 'Git, GitHub',
  },
  {
    key: '4',
    title: 'LMS/LCMS',
    details: 'Moodle, Lära LMS, Canvas',
  },
  {
    key: '5',
    title: 'VCMS',
    details: 'YouTube, Panopto',
  },
  {
    key: '6',
    title: 'CMS',
    details: 'Wordpress',
  },
  {
    key: '7',
    title: 'Outils de collaboration',
    details: 'Microsoft 365, SharePoint Online, Google G Suite',
  },
  {
    key: '8',
    title: 'Outils de visioconférence',
    details: 'Microsoft Teams, Zoom Video Communications, Via SVI eSolutions',
  },
  {
    key: '9',
    title: 'Logiciel auteur (authoring tool)',
    details: 'Adobe Captivate',
  },
  {
    key: '10',
    title: 'Logiciel de gestion bibliographique',
    details: 'Zotero, Mendeley',
  },
]

function TechnologieIcon() {
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
        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
      />
    </svg>
  )
}

export default function Technologie() {
  return (
    <div className="mb-12 rounded-2xl border border-zinc-300 p-6 dark:border-zinc-600">
      <h2 className="flex text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        <TechnologieIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">
          Technologies, logiciels et autres compétences
        </span>
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {technologie.map((technologie) => (
          <div
            key={technologie.key}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="min-w-0 flex-1">
              <div href="" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-center text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  {technologie.title}
                </p>
                <p className="text-center text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {technologie.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
