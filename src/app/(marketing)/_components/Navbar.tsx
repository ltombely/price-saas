import BrandLogo from '@/components/BrandLogo'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="bg-background/95 fixed top-0 z-10 flex w-full py-6 shadow-lg">
      <nav className="container flex items-center gap-10 font-semibold">
        <Link href="/">
          <BrandLogo />
        </Link>
        <Link href="/" className="text-lg">
          Features
        </Link>
        <Link href="/" className="text-lg">
          Pricing
        </Link>
        <Link href="/" className="text-lg">
          About{' '}
        </Link>
        <span className="text-lg">
          {/* <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut> */}
        </span>
      </nav>
    </header>
  )
}
export default Navbar
