'use client'
import Image from 'next/image'
import {clsx, type ClassValue} from "clsx"

import {Button} from "@/components/ui/button"
import {cn} from "@/lib/utils";


export default function Home() {
	return (
		<div className="bg-background h-72">
			<div className="grid lg:grid-cols-5">
				<Sidebar className="hidden lg:block"/>
				<div className="col-span-3 lg:col-span-4 lg:border-l">
					content
				</div>
			</div>
		</div>
	)
}

function Sidebar({className}) {
	return (
		<div className={cn("pb-12", className)}>
			<div className="space-y-4 py-4">
				<div className="px-4 py-2">
					<h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
						Discover
					</h2>
					<div className="space-y-1">
						<Button variant="default" size="sm">Test</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
