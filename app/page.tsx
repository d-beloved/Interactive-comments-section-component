"use client";

import React, { FunctionComponent, useState } from "react";
import data from "../data.json";
import CommentGroup from "./components/CommentGroup";
import CommentInput from "./components/CommentInput";
import DeleteModal from "./components/DeleteModal";
import { CommentProps, ReplyProps, SearchParamProps } from "./lib/interfaces";

const Page: FunctionComponent<SearchParamProps> = ({ searchParams }) => {
	const show = searchParams?.show;
	const [comments, setComments] = useState<CommentProps[] | undefined>(
		data.comments,
	);

	const addComment = (newComment: CommentProps) => {
		setComments([...comments, newComment]);
	};

	return (
		<div className={`${show ? "h-screen overflow-hidden pr-[15px]" : ""}`}>
			<div className="sm:container flex flex-col justify-center items-center sm:mx-auto w-full my-14 gap-6">
				<CommentGroup comments={comments} />
				<CommentInput onAddComment={addComment} />
			</div>
			{show && <DeleteModal />}
		</div>
	);
};

export default Page;
