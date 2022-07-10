import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    document.title = '404 - MW'
    setTimeout(() => {
      router.push('/')
    }, 4000)
  })

  return (
    <div className="flex-row" style={{ height: '100vh' }}>
      <h1 className="margin-auto fs-1000">404</h1>
    </div>
  )
}
