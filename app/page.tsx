import React from "react";
import data from "../data.json";
import Comment from "./components/Comment";

export default function Page() {
	return (
		<div className="container flex justify-center items-center h-lvh mx-auto">
			<Comment />
		</div>
	);
}
