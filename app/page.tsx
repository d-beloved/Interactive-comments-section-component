import React from "react";
import data from "../data.json";
import CommentGroup from "./components/CommentGroup";
import CommentInput from "./components/CommentInput";
import DeleteModal from "./components/DeleteModal";

type SearchParamProps = {
	searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: SearchParamProps) {
	const show = searchParams?.show;
	return (
		<div className={show ? "h-screen overflow-hidden pr-[15px]" : ""}>
			<div className="container flex flex-col justify-center items-center mx-auto w-full my-14 gap-6">
				<CommentGroup />
				<CommentInput />
			</div>
			{show && <DeleteModal />}
		</div>
	);
}
