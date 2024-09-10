import { FunctionComponent } from "react";
import Comment from "./Comment";

const CommentWithReply: FunctionComponent = () => {
	return (
		<>
			<Comment />
			<div className="flex items-center flex-col gap-6 w-11/12 self-end pl-9 border-l-2 border-solid border-gray-200">
				<Comment />
				<Comment />
			</div>
		</>
	);
};

const CommentGroup: FunctionComponent = () => {
	return (
		<div className="flex flex-col gap-6 w-3/5">
			<Comment />
			<CommentWithReply />
		</div>
	);
};

export default CommentGroup;
