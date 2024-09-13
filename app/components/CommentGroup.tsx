import { FunctionComponent } from "react";
import Comment from "./Comment";
import { CommentComponentProps, CommentProps } from "../lib/interfaces";

interface CommentGroupProps {
	comments: CommentProps[] | undefined;
}

const CommentWithReply: FunctionComponent<CommentComponentProps> = ({
	comment,
}) => {
	const replies = "replies" in comment && comment.replies;
	return (
		<>
			<Comment comment={comment} />
			<div className="flex items-center flex-col sm:gap-6 gap-4 sm:w-11/12 self-end sm:pl-9 border-l-2 border-solid border-gray-200">
				{replies.map((reply) => (
					<Comment key={reply.id} comment={reply} />
				))}
			</div>
		</>
	);
};

const CommentGroup: FunctionComponent<CommentGroupProps> = ({ comments }) => {
	if (!comments)
		return (
			<div className="flex justify-center items-center m-auto w-full">
				<h1 className="text-usrname font-bold text-2xl">
					Type a comment below to get started 👇🏽
				</h1>
			</div>
		);

	return (
		<div className="flex flex-col sm:gap-6 gap-4 sm:w-4/5 lg:w-3/5 w-full">
			{comments.map((comment) => {
				const hasReplies = comment.replies.length > 0;
				return !hasReplies ? (
					<Comment key={comment.id} comment={comment} />
				) : (
					<CommentWithReply key={comment.id} comment={comment} />
				);
			})}
		</div>
	);
};

export default CommentGroup;
