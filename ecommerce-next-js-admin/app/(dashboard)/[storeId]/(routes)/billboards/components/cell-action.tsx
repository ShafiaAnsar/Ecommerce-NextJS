'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BillboardColumn } from "./columns"
import { Button } from "@/components/ui/button"
import { Edit, MoreHorizontal } from "lucide-react"

interface CellActionColumnProps{
    data:BillboardColumn
}
export const CellAction:React.FC<CellActionColumnProps> = ({data})=>{
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4 "/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    <DropdownMenuItem>
                        <Edit className='mr-2 h-4 w-4'/>
                    </DropdownMenuItem>
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}