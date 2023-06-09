import { BASE_URL } from '@/constants'
import { MetadataRoute } from 'next'

function sitemap(): MetadataRoute.Sitemap {
  const routesMap = [
    '',
    '/about',
    '/shop',
    '/api/auth/signin',
    '/api/auth/signout',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routesMap]
}

export default sitemap
