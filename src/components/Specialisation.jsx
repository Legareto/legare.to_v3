import Image from 'next/future/image'

let champ = [
  {
    key: '1',
    title: 'Technologies éducatives',
    details:
      "Environnements numériques d'apprentissage et applications éducatives",
  },
  {
    key: '2',
    title: 'Gestion de projet et gestion de produit',
    details: 'Méthodes agiles et traditionnelles en contexte éducatif',
  },
  {
    key: '3',
    title: "Didactique de l'univers social",
    details: "Apprentissage de l'histoire et de la géographie à l'école",
  },
  {
    key: '4',
    title: 'Pratiques réflexives',
    details: "L'objectivation de la pratique enseignante",
  },
]

function SpecialisationIcon() {
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
        d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

export default function Specialisation() {
  return (
    <div className="mb-12 rounded-2xl border border-zinc-300 p-6 dark:border-zinc-600">
      <h2 className="flex text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        <SpecialisationIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Champs de spécialisation</span>
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {champ.map((champ) => (
          <div
            key={champ.key}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="min-w-0 flex-1">
              <div href="" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-center text-sm font-bold text-gray-900">
                  {champ.title}
                </p>
                <p className="text-center text-sm font-medium text-gray-900">
                  {champ.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
