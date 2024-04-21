"use client";

import { useState } from "react";
import { ClientComponentTwo } from "@/components/client-component-two";


export const ClientComponentOne = ({children}: {children:React.ReactNode}) => {

	const[name, setName] = useState("Batman");
	console.log("hot")

	return (
		<>
			<h1>Client component one</h1>
			{children}
			<ClientComponentTwo />
		</>
	);
}