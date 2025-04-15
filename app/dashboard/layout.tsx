import { Suspense } from 'react'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={<div>...loading</div>}>{children}</Suspense>
    </div>
  )
}

export default DashboardLayout
