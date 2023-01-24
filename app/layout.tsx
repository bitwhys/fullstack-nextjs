import './globals.css'
import localFont from '@next/font/local'

const genera = localFont({
  src: [
    { path: '../assets/genera-font/GeneraGrotesk-Light.woff', style: 'normal', weight: '300' },
    { path: '../assets/genera-font/GeneraGrotesk-Light.woff2', style: 'normal', weight: '300' },
    { path: '../assets/genera-font/GeneraGrotesk-Regular.woff', style: 'normal', weight: '4000' },
    { path: '../assets/genera-font/GeneraGrotesk-Regular.woff2', style: 'normal', weight: '400' },
    { path: '../assets/genera-font/GeneraGrotesk-Medium.woff', style: 'normal', weight: '5000' },
    { path: '../assets/genera-font/GeneraGrotesk-Medium.woff2', style: 'normal', weight: '500' },
    { path: '../assets/genera-font/GeneraGrotesk-Bold.woff', style: 'normal', weight: '700' },
    { path: '../assets/genera-font/GeneraGrotesk-Bold.woff2', style: 'normal', weight: '700' },
    { path: '../assets/genera-font/GeneraGrotesk-Heavy.woff', style: 'normal', weight: '900' },
    { path: '../assets/genera-font/GeneraGrotesk-Heavy.woff2', style: 'normal', weight: '900' },
  ],
  display: 'swap',
  variable: '--genera-font',
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${genera.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-black">{children}</body>
    </html>
  )
}
