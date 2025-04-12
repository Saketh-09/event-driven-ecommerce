// src/components/layout/Header.tsx
'use client'

import Link from 'next/link'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black">
          ShopVerse
        </Link>

        {/* Nav Links */}
        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <Link href="/products" className="text-sm font-medium hover:underline">
                Products
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/orders" className="text-sm font-medium hover:underline">
                Orders
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/admin" className="text-sm font-medium hover:underline">
                Admin
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Profile / Login */}
        <Button variant="outline" className="text-sm">
          Login
        </Button>
      </div>
    </header>
  )
}
