"use client";

import { FunctionComponent, useState } from "react";
import data from "../../data.json";
import { CommentProps, ReplyProps } from "../lib/interfaces";

interface InputBtnProps {
	comment: string;
	onClick: () => void;
}

interface CommentInputProps {
	onAddComment: (newComment: CommentProps) => void;
}

const UserImage = () => {
	const { image, username } = data.currentUser;
	return (
		<div className="w-8 h-8 sm:w-12 sm:h-12">
			<img
				className="w-full h-full rounded-full"
				src={image.png}
				alt={`${username} picture`}
			/>
		</div>
	);
};

const InputButton: FunctionComponent<InputBtnProps> = ({
	comment,
	onClick,
}) => {
	return (
		<button
			className="bg-otherbg text-white font-bold px-7 py-2 rounded-md hover:opacity-50 disabled:opacity-40"
			onClick={onClick}
			disabled={comment.length < 1}
		>
			Send
		</button>
	);
};

const CommentInput: FunctionComponent<CommentInputProps> = ({
	onAddComment,
}) => {
	const [comment, setComment] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleCreateComment = () => {
		if (comment.trim().length > 3) {
			const newComment = {
				id: data.comments.length,
				content: comment,
				createdAt: "Now",
				score: 0,
				user: data.currentUser,
				replies: [],
			};
			onAddComment(newComment);
			setComment("");
		} else {
			setError("Comments must be at least 3 characters long");
		}
	};

	return (
		<div className="flex flex-col md:flex-row justify-between p-8 bg-white gap-4 rounded-2xl border-solid border-gray-100 border-x-2 border-y-4 shadow-md sm:w-4/5 lg:w-3/5 w-full">
			<div className="hidden md:block">
				<UserImage />
			</div>
			<div className="md:w-11/12">
				<textarea
					className="md:w-full px-5 py-3 rounded-lg focus:outline-gray-300 focus:outline-4 focus:outline-offset-2 border text-gray-500 font-semibold resize-none"
					rows={3}
					placeholder="Add a comment..."
					value={comment}
					onChange={(e) => {
						setComment(e.target.value), setError("");
					}}
				/>
				{error && (
					<p className="text-red-600 mt-1 font-semibold">{error}</p>
				)}
			</div>
			<div className="md:block hidden">
				<InputButton comment={comment} onClick={handleCreateComment} />
			</div>
			<div className="flex justify-between items-center md:hidden">
				<UserImage />
				<InputButton comment={comment} onClick={handleCreateComment} />
			</div>
		</div>
	);
};

export default CommentInput;
