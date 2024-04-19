import {serverSideFunction} from "@/utils/server-utils"

import Image from "@/app/components/Image";
import {ImageSlider} from "@/components/ImageSlider";




export default function ServerRoutePage(){
	const result = serverSideFunction()
	return (
		<>
			<h1>ServerRoutePage</h1>
			<p>{result}</p>
			<Image />
			<ImageSlider />
		</>
		);
}