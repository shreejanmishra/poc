import type React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
        Dashboard
      </Link>
      <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Servers
      </Link>
      <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Monitoring
      </Link>
      <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Cost Management
      </Link>
      <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Settings
      </Link>
    </nav>
  )
}
