import Image from 'next/image'

export const SignUpSignInCarousel = () => {
  return (
    <Image
      src="https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?q=80&w=2618&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="https://unsplash.com/photos/black-and-red-metal-frame-9MR78HGoflw"
      fill={true}
      style={{ objectFit: 'cover' }}
    />
  )
}
