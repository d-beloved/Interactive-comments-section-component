import { FunctionComponent } from "react";
import Comment from "./Comment";

const CommentWithReply: FunctionComponent = () => {
	return (
		<>
			<Comment />
			<div className="flex items-center flex-col sm:gap-6 gap-4 sm:w-11/12 self-end sm:pl-9 border-l-2 border-solid border-gray-200">
				<Comment />
				<Comment />
			</div>
		</>
	);
};

const CommentGroup: FunctionComponent = () => {
	return (
		<div className="flex flex-col sm:gap-6 gap-4 sm:w-4/5 lg:w-3/5 w-full">
			<Comment />
			<CommentWithReply />
		</div>
	);
};

export default CommentGroup;
