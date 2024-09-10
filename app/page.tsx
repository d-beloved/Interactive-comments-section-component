import React from "react";
import data from "../data.json";
import CommentGroup from "./components/CommentGroup";
import CommentInput from "./components/CommentInput";

export default function Page() {
	return (
		<div className="container flex flex-col justify-center items-center mx-auto w-full my-14 gap-6">
			<CommentGroup />
			<CommentInput />
		</div>
	);
}
