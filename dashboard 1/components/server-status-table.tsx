import { AlertCircle, CheckCircle, Cloud, MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const servers = [
  {
    id: "web-prod-01",
    appcode:"abc",
    name: "abc-prod-01",
    provider: "Azure",
    environment: "Production",
    status: "Healthy",
    cpu: "12%",
    memory: "24%",
    disk: "42%",
    uptime: "99.9%",
    lastChecked: "2 min ago",
  },
  {
    id: "web-prod-02",
    appcode:"def",
    name: "def-prod-02",
    provider: "Azure",   
    environment: "Production",
    status: "Healthy",
    cpu: "8%",
    memory: "18%",
    disk: "36%",
    uptime: "99.9%",
    lastChecked: "3 min ago",
  },
  {
    id: "web-prod-03",
    appcode:"ghi",
    name: "ghi-prod-03",
    provider: "Azure",
    environment: "Production",
    status: "Warning",
    cpu: "95%",
    memory: "76%",
    disk: "52%",
    uptime: "99.8%",
    lastChecked: "Just now",
  },
  {
    id: "db-prod-01",
    appcode:"xyz",
    name: "xyz-prod-01",
    provider: "AWS", 
    environment: "Production",
    status: "Healthy",
    cpu: "32%",
    memory: "45%",
    disk: "68%",
    uptime: "99.9%",
    lastChecked: "5 min ago",
  },
  {
    id: "db-aws-01",
    appcode:"pqr",
    name: "pqr-aws-01",
    provider: "AWS",
    
    environment: "Development",
    status: "Healthy",
    cpu: "5%",
    memory: "12%",
    disk: "25%",
    uptime: "99.7%",
    lastChecked: "10 min ago",
  },
]

interface ServerStatusTableProps {
  showExtended?: boolean
}

export function ServerStatusTable({ showExtended = false }: ServerStatusTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Status</TableHead>
          <TableHead>Appcode</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Provider</TableHead>
          
          <TableHead>Environment</TableHead>
          
          {showExtended && (
            <>
              <TableHead>CPU</TableHead>
              <TableHead>Memory</TableHead>
              <TableHead>Disk</TableHead>
              <TableHead>Uptime</TableHead>
              <TableHead>Last Check</TableHead>
            </>
          )}
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {servers.map((server) => (
          <TableRow key={server.id}>
            <TableCell>
              {server.status === "Healthy" ? (
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span>Healthy</span>
                </div>
              ) : server.status === "Warning" ? (
                <div className="flex items-center">
                  <AlertCircle className="mr-2 h-4 w-4 text-amber-500" />
                  <span>Warning</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <AlertCircle className="mr-2 h-4 w-4 text-red-500" />
                  <span>Critical</span>
                </div>
              )}
            </TableCell>
                        <TableCell className="font-medium">{server.appcode}      
            </TableCell>
            <TableCell className="font-medium">{server.name}</TableCell>
            
            <TableCell>
              <div className="flex items-center">
                <Cloud className="mr-2 h-4 w-4" />
                <span>{server.provider}</span>
              </div>
            </TableCell>

            <TableCell>
              <Badge variant="outline">{server.environment}</Badge>
            </TableCell>
            {showExtended && (
              <>
                <TableCell>{server.cpu}</TableCell>
                <TableCell>{server.memory}</TableCell>
                <TableCell>{server.disk}</TableCell>
                <TableCell>{server.uptime}</TableCell>
                <TableCell>{server.lastChecked}</TableCell>
              </>
            )}
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Restart Server</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>SSH Connect</DropdownMenuItem>
                  <DropdownMenuItem>View Logs</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
