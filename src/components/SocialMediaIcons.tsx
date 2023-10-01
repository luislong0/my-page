import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function SocialMediaIcons() {
  return (
    <div className="flex items-center gap-5 text-zinc-100">
      <Link
        href={'https://github.com/luislong0'}
        className="transition-all hover:scale-105 hover:text-violet-500"
      >
        <FontAwesomeIcon icon={faGithub} size={'2x'} />
      </Link>

      <Link
        href={'https://www.linkedin.com/in/luislong0/'}
        className="transition-all hover:scale-105 hover:text-violet-500"
      >
        <FontAwesomeIcon icon={faLinkedin} size={'2x'} />
      </Link>

      <Link
        href={'mailto:luisptavio.l.p@gmail.com'}
        className="transition-all hover:scale-105 hover:text-violet-500"
      >
        <Mail size={36} />
      </Link>
    </div>
  )
}
