import { FunctionComponent } from "react";
import Link from "next/link";
import { CommentComponentProps } from "../lib/interfaces";
import data from "../../data.json";

const isCurrentUser = (username: string): boolean => {
	return data.currentUser.username === username;
};

const commentActions = (username: string) => {
	return (
		<div className="flex gap-4">
			{!isCurrentUser(username) && (
				<div className="flex gap-2 items-center cursor-pointer hover:opacity-40">
					<div>
						<img src="./images/icon-reply.svg" alt="reply" />
					</div>
					<span className="text-otherbg font-bold">Reply</span>
				</div>
			)}
			{isCurrentUser(username) && (
				<>
					<Link
						href="/?show=true"
						className="flex gap-2 items-center cursor-pointer hover:opacity-40"
					>
						<div>
							<img src="./images/icon-delete.svg" alt="delete" />
						</div>
						<span className="text-red-400 font-bold">Delete</span>
					</Link>
					<div className="flex gap-2 items-center cursor-pointer hover:opacity-40">
						<div>
							<img src="./images/icon-edit.svg" alt="edit" />
						</div>
						<span className="text-otherbg font-bold">Edit</span>
					</div>
				</>
			)}
		</div>
	);
};

const commentContent = (content: string, replyingTo: string) => {
	return (
		<p className="text-gray-400 font-semibold text-base sm:text-[18px]">
			{replyingTo && (
				<span className="text-usrname">{`@${replyingTo} `}</span>
			)}
			{content}
		</p>
	);
};

const Comment: FunctionComponent<CommentComponentProps> = ({ comment }) => {
	const { user, createdAt, content, score } = comment;
	return (
		<div className="flex flex-col-reverse md:flex-row items-center p-8 bg-white gap-8 rounded-2xl border-solid border-gray-100 border-x-2 border-y-4 shadow-md">
			<div className="max-md:flex max-md:justify-between max-md:items-center max-md:gap-4 max-md:w-full">
				<div className="flex md:flex-col items-start gap-4 bg-action rounded-2xl py-2 px-5 md:p-4 md:h-max">
					<img
						className="md:w-9 w-3 cursor-pointer hover:brightness-50"
						src="./images/icon-plus.svg"
						alt="upvote"
					/>
					<span className="text-counter text-lg font-semibold">
						{score}
					</span>
					<img
						className="md:w-9 w-3 cursor-pointer hover:brightness-50"
						src="./images/icon-minus.svg"
						alt="downvote"
					/>
				</div>
				<div className="block md:hidden">
					{commentActions(user.username)}
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex justify-between">
					<div className="flex gap-4 items-center">
						<div className="w-9 h-9 self-center">
							<img
								// className="w-full h-full"
								src={user.image.png}
								alt={`${user.username} picture`}
							/>
						</div>
						<p className="text-usrname font-bold text-[14px] sm:text-base">
							{user.username}
						</p>
						{isCurrentUser(user.username) && (
							<span className="bg-otherbg text-white font-semibold px-2 rounded-sm text-[14px] sm:text-base">
								you
							</span>
						)}
						<p className="text-gray-400 font-bold text-[14px] sm:text-base">
							{createdAt}
						</p>
					</div>
					<div className="hidden md:flex">
						{commentActions(user.username)}
					</div>
				</div>
				{commentContent(
					content,
					"replyingTo" in comment && comment.replyingTo,
				)}
			</div>
		</div>
	);
};

export default Comment;
