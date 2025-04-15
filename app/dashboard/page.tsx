import { getIssues } from '@/lib/dal'

const DashboardPage = async () => {
  const issues = await getIssues()
  return 'dashboard'
}

export default DashboardPage
