import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Server Restart</p>
          <p className="text-sm text-muted-foreground">web-prod-03 (Azure) restarted successfully</p>
        </div>
        <div className="ml-auto font-medium text-xs text-muted-foreground">Just now</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Alert Resolved</p>
          <p className="text-sm text-muted-foreground">High CPU usage on db-aws-01 (AWS) resolved</p>
        </div>
        <div className="ml-auto font-medium text-xs text-muted-foreground">45m ago</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">New VM Provisioned</p>
          <p className="text-sm text-muted-foreground">app-dev-07 (Azure) provisioned successfully</p>
        </div>
        <div className="ml-auto font-medium text-xs text-muted-foreground">2h ago</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Backup Completed</p>
          <p className="text-sm text-muted-foreground">Weekly backup for db-prod-cluster (AWS) completed</p>
        </div>
        <div className="ml-auto font-medium text-xs text-muted-foreground">3h ago</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Security Update</p>
          <p className="text-sm text-muted-foreground">Security patches applied to 12 servers</p>
        </div>
        <div className="ml-auto font-medium text-xs text-muted-foreground">5h ago</div>
      </div>
    </div>
  )
}
