import React, { FunctionComponent } from "react";
import data from "../data.json";
import CommentGroup from "./components/CommentGroup";
import CommentInput from "./components/CommentInput";
import DeleteModal from "./components/DeleteModal";
import { SearchParamProps } from "./lib/interfaces";

const Page: FunctionComponent<SearchParamProps> = ({ searchParams }) => {
	const show = searchParams?.show;
	return (
		<div className={`${show ? "h-screen overflow-hidden pr-[15px]" : ""}`}>
			<div className="sm:container flex flex-col justify-center items-center sm:mx-auto w-full my-14 gap-6">
				<CommentGroup comments={data.comments} />
				<CommentInput />
			</div>
			{show && <DeleteModal />}
		</div>
	);
};

export default Page;
