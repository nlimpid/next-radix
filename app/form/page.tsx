"use client"

import Link from "next/link"
import * as z from "zod"

import {zodResolver} from "@hookform/resolvers/zod"

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
})

import {Button} from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import {SubmitHandler, useForm} from "react-hook-form";
import {Input} from "@/components/ui/input"
import {useEffect, useState} from "react";

type Inputs = {
	username: string,
	exampleRequired: string,
};

interface TODOItem {
	id: number,
	done: boolean,
	description: string
}

function GetTODO() {
	const [submittedData, setSubmittedData] = useState(null);


	const fetchData = () => {
		fetch("http://127.0.0.1:7033/list_todo", {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				// Add any other required headers here
			},}).then(res => res.json()).then(
			data => setItems(data)
		)
	}
	const [items, setItems] = useState<TODOItem[]>([])
	useEffect(fetchData, [submittedData]);

	return (
		<div>
			{items.map((item, index) => (
				<div key={index}>{item.id} {item.description}</div>
			))}
		</div>
	)
}

export default function ProfileForm() {
	const form = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
		fetch("http://127.0.0.1:7033/add_todo", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				// Add any other required headers here
			},
			body: JSON.stringify({ name: data.username }),}).then(res => res.json()).then(

		)
	};

	return (
		<>
			<div className="flex items-center justify-center ">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="username"
							render={({field}) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="shadcn" {...field} />
									</FormControl>
									<FormDescription>
										This is your public display name.
									</FormDescription>
									<FormMessage/>
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</div>
			<div>
				<GetTODO></GetTODO>
			</div>
		</>
	)
}

