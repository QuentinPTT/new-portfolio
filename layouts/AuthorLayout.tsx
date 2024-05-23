import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from 'next/link'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Qui suis-je ?
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6 pb-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
            </div>
            <Link href="/static/pdf/cv.pdf" target='_blank' className='bg-primary-600 hover:bg-primary-500 transition-colors text-white px-4 py-2 rounded w-full text-center'>
              CV
            </Link>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <p>Je suis actuellement étudiant à ISAE-Supméca, en spécialisation Mécatronique et Systèmes Complexes et je développe en parallèle des outils qui permettent aux e-commerçants de décider plus facilement grâce aux clients</p>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div>
              <h3>Intérêts</h3>
              <ul>
                <li>Data Science</li>
                <li>Electronique</li>
                <li>Ingénierie Système et Contrôle</li>
                <li>Entreprenariat</li>
              </ul>
            </div>
            <div>
              <h3>Education</h3>
              <ul>
                <li><span className='font-bold'>Diplôme d'Ingénieur</span>, ISAE-Supmeca, France, 2025</li>
                <li><span className='font-bold'>MPSI-MP*</span>, Lycée Pierre Corneille, France, 2022</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
