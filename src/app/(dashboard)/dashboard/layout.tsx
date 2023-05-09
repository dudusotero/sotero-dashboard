import Content from '@/components/dashboard/Content'
import Sidebar from '@/components/dashboard/Sidebar'
import { authOptions } from '@/lib/next-auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <div className="h-full bg-gray-900">
      <Sidebar />
      <Content>{children}</Content>
    </div>
  )
}

export default Layout
