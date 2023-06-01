import { SunIcon } from '@heroicons/react/outline'

const Footer = () => {
  return (
    <footer className="align-items mx-auto mt-4 flex max-w-sm justify-center space-x-4 rounded-md p-2 md:max-w-2xl">
      <div>
        Design By{' '}
        <a
          className="underline underline-offset-1"
          href="http://www.srdreamlab.com"
        >
          SR Dream Lab
        </a>
      </div>
    </footer>
  )
}

export default Footer
