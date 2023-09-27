import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function SocialMediaIcons() {
  return (
    <div className="flex items-center gap-5">
      <Link
        href={''}
        className="transition-all hover:scale-105 hover:text-violet-500"
      >
        <FontAwesomeIcon icon={faGithub} size={'2x'} />
      </Link>

      <Link
        href={''}
        className="transition-all hover:scale-105 hover:text-violet-500"
      >
        <FontAwesomeIcon icon={faLinkedin} size={'2x'} />
      </Link>

      <Link
        href={''}
        className="transition-all hover:scale-105 hover:text-violet-500"
      >
        <Mail size={36} />
      </Link>
    </div>
  )
}
