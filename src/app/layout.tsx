import Provider from '@/components/Provider'
import './globals.css'

const { SITE_NAME } = process.env

export const metadata = {
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  description: 'High-performance project built with Next.js.',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className="h-full">
      <body className="h-full">
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}

export default RootLayout
