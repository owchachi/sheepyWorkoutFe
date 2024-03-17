import { SignUpSignInCarousel } from '@/components'

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="bg-secondary-900 h-screen w-screen flex justify-center items-center">
      <div className="flex justify-center items-center lg:w-5/12 lg:mx-20 md:w-12/12 max-lg:mx-5">
        {children}
      </div>
      <div className="relative h-full lg:w-7/12 md:w-0">
        <div className="absolute w-full h-full z-10 bg-primary-500 opacity-15" />
        <SignUpSignInCarousel />
      </div>
    </div>
  )
}

export default AuthLayout
