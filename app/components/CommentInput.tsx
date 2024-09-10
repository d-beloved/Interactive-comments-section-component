import { FunctionComponent } from "react";

const CommentInput: FunctionComponent = () => {
	return (
		<div className="flex justify-between p-8 bg-white gap-4 rounded-2xl border-solid border-gray-100 border-x-2 border-y-4 shadow-md w-3/5">
			<div className="w-12 h-12">
				<img
					src="./images/avatars/image-juliusomo.png"
					alt="Juliusomo profile picture"
				/>
			</div>
			<textarea
				className="w-11/12 px-5 py-3 rounded-lg focus:outline-gray-300 focus:outline-4 focus:outline-offset-2 border text-gray-500 font-semibold resize-none"
				rows={3}
				placeholder="Add a comment..."
			/>
			<div>
				<button className="bg-otherbg text-white font-bold px-7 py-2 rounded-md">
					Send
				</button>
			</div>
		</div>
	);
};

export default CommentInput;
