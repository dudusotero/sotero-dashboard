import Footer from '@/components/shop/Footer'
import Header from '@/components/shop/Header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
