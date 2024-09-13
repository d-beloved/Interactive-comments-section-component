import { FunctionComponent } from "react";
import data from "../../data.json";

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

const InputButton = () => {
	return (
		<button className="bg-otherbg text-white font-bold px-7 py-2 rounded-md hover:opacity-50">
			Send
		</button>
	);
};

const CommentInput: FunctionComponent = () => {
	return (
		<div className="flex flex-col md:flex-row justify-between p-8 bg-white gap-4 rounded-2xl border-solid border-gray-100 border-x-2 border-y-4 shadow-md sm:w-4/5 lg:w-3/5 w-full">
			<div className="hidden md:block">
				<UserImage />
			</div>
			<textarea
				className="md:w-11/12 px-5 py-3 rounded-lg focus:outline-gray-300 focus:outline-4 focus:outline-offset-2 border text-gray-500 font-semibold resize-none"
				rows={3}
				placeholder="Add a comment..."
			/>
			<div className="md:block hidden">
				<InputButton />
			</div>
			<div className="flex justify-between items-center md:hidden">
				<UserImage />
				<InputButton />
			</div>
		</div>
	);
};

export default CommentInput;
