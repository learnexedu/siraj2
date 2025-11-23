'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Home, Users, Settings, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { icon: Home, label: 'لوحة التحكم', href: '/supervisor' },
  { icon: Users, label: 'الطلبات', href: '/supervisor/applications' },
  { icon: Settings, label: 'الإعدادات', href: '/supervisor/settings' },
]

export function SupervisorSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-40 p-2 bg-dashboard-card text-white rounded-lg md:hidden border border-dashboard-border"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 right-0 h-full w-64 bg-dashboard-bg text-dashboard-text transform transition-transform duration-300
        md:static md:translate-x-0
        z-30
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6 border-b border-dashboard-border">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">س</span>
            </div>
            <span className="font-bold text-lg text-white">سراج</span>
            <span className="text-xs bg-accent/30 px-2 py-1 rounded text-accent ml-auto">مشرف</span>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    ${isActive 
                      ? 'bg-accent/20 border-l-4 border-accent text-white' 
                      : 'hover:bg-dashboard-card text-dashboard-text'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-6 right-6 left-6">
          <Button className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-600/30 flex items-center justify-center gap-2">
            <LogOut size={20} />
            تسجيل الخروج
          </Button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
        />
      )}
    </>
  )
}
