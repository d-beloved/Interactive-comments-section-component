import React from "react";
import data from "../data.json";
import Comment from "./components/Comment";

export default function Page() {
	return (
		<div className="container mx-auto">
			<Comment />
		</div>
	);
}
