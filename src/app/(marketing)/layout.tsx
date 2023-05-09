import Footer from '@/components/marketing/Footer'
import Header from '@/components/marketing/Header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Header />
      <main className="isolate pt-14">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
