import React from "react";
import data from "../data.json";
import CommentGroup from "./components/CommentGroup";

export default function Page() {
	return (
		<div className="container flex flex-col justify-center items-center h-lvh mx-auto w-full my-20">
			<CommentGroup />
		</div>
	);
}
