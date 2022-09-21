import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/profil">Profil</NavLink>
                <NavLink href="/curriculumvitae">CV</NavLink>
                <NavLink href="/enseignement">Enseignement</NavLink>
                <NavLink href="/recherches">Recherches</NavLink>
                <NavLink href="/publications">Publications</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Legare.to - Tous droits
                réservés.
                <br />
                Programmation et design :
                <a
                  href="https://github.com/Legareto"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;Tommy Légaré
                </a>
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
