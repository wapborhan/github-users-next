import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <div className="cursor-pointer rounded-xl p-3">
        <p className="font-mono text-xl font-semibold text-gray-800 dark:text-gray-50 md:text-xl lg:text-2xl">
          Github User Finder
        </p>
      </div>
    </Link>
  )
}

export default Logo
