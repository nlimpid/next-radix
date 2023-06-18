"use client";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {Smiley, Heart, Horse} from "@phosphor-icons/react";
import {FaceIcon, ImageIcon, ChevronUpIcon, ChevronDownIcon} from '@radix-ui/react-icons'

import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {MouseEventHandler, useState} from "react";
import {atom, useAtom} from "jotai";
import {useImmer} from "use-immer";
import {usePathname} from "next/navigation";

const navAtom = atom<boolean>(true);

export function BodyLayout({children}: { children: React.ReactNode }) {
	const [isNav, setIsNav] = useAtom(navAtom);

	return (
		<div className="root_layout_wrapper">
			<header className="root_layout_header "></header>
			<main className="root_layout_main">
				{/* <div className="absolute inset-0 opacity-50">
          {!isNav ? <NavButton /> : <></>}
        </div> */}
				<div className="ml-auto mr-auto w-10/12 pt-8 pb-4">{children}</div>
			</main>
			{isNav ? (
				<nav className="root_layout_nav md:border-r">
					{isNav ? <NavButton/> : <></>}
					<Sidebar></Sidebar>
				</nav>
			) : (
				<></>
			)}
			<footer className="root_layout_footer"></footer>
		</div>
	);
}

function NavButton() {
	const [value, setValue] = useAtom(navAtom);
	const handleClick = () => {
		setValue(!value);
	};

	return (
		<div>
			<Button size="sm" onClick={handleClick}>navButton</Button>
		</div>
	);
}

interface Sidebar {
	show_name: string;
	link_path: string;
	icon: any;
}

let sidebar_data: Sidebar[];
sidebar_data = [
	{show_name: "grid", link_path: "grid", icon: <Smiley/>},
	{show_name: "effect", link_path: "effect", icon: <Heart/>},
	{show_name: "exp", link_path: "exp", icon: <Heart/>},
	{show_name: "weather", link_path: "weather", icon: <Heart/>},
	{show_name: "payments", link_path: "payments", icon: <Heart/>},
	{show_name: "b", link_path: "b", icon: <Horse/>},
];

function Sidebar({className}: any) {
	const pathname = usePathname()

	return (
		<div className={cn("pb-12", className)}>
			<div className="space-y-4 py-4 w-56">
				<div className="px-4 py-2">
					<ul>
						{sidebar_data.map((item, index) => {

							return <MenuItemVertical
								key={item.link_path}
								link_path={item.link_path}
								show_name={item.show_name}
								icon={item.icon}
							/>}
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}


interface MenuClick {
	clicked: boolean
	menu_name: string
}

interface DicMenuClick {
	[key: string]: boolean
}

function MenuItemVertical({link_path, show_name, icon}: Sidebar) {
	const pathname = usePathname()
	const [subMenu, setSubMenu] = useImmer<DicMenuClick>({
		"grid": false,
		"effect": false,
		"exp": false,
	})
	const showSubMenu = (e: React.MouseEvent<HTMLElement>) => {
		console.log("id = {}", e.currentTarget.id)
		const menu_id = e.currentTarget.id
		const new_value = !subMenu[menu_id]
		setSubMenu(prev => {
			prev[menu_id] = !prev[menu_id]
		})
	}
	const isActive = pathname.startsWith("/" + link_path) ;

	return (
		<li className="block py-2 px-4 rounded ">
			<div className="flex items-center content-between">
				<Link href={"/" + link_path} className={cn('flex-grow transition-colors hover:bg-blue-100 active:bg-blue-400', {'text-blue-500' : isActive})} >
					<div className="flex items-center gap-4">
						<div className="w-4">
							{icon}
						</div>
						<span>{show_name}</span>
					</div>
				</Link>
				<div id={link_path} className="" onClick={showSubMenu}>
            <span>
	            {(subMenu[link_path]) ?  <ChevronUpIcon/> : <ChevronDownIcon/>}
            </span>
				</div>
			</div>
			{(subMenu[link_path]) ? <MenuItemUlVertical/> : <></>}
		</li>
	);
}


function MenuItemUlVertical() {
	return (
		<div className="pt-2 pl-4 flex-col gap-2">
			<div className="h-8">
				<Link href="/effect" >
					<span>sub menu1</span>
				</Link>
			</div>
			<div className="h-8">
				<Link href="/exp" className="h-8">
					<span>sub menu 2</span>
				</Link>
			</div>
		</div>

	);
}