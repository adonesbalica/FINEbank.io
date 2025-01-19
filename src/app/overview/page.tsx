import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

export default function OverviewPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
      </div>
    </div>
  )
}
