import {serverSideFunction} from "@/utils/server-utils"
import {clientSideFunction} from "@/utils/client-utils"

import {ImageSlider} from "@/components/ImageSlider";




export default function ServerRoutePage(){
	const result = serverSideFunction()
	const result2 = clientSideFunction()
	return (
		<>
			<h1>ServerRoutePage</h1>
			<p>{result}</p>
			<p>{result2}</p>
			<ImageSlider />
		</>
		);
}