import { FunctionComponent } from "react";
import { Comment as CommentProps } from "../lib/interfaces";

const Comment: FunctionComponent = () => {
	return (
		<div className="flex w-3/4 p-8 bg-white gap-8 rounded-2xl border-solid border-gray-100 border-x-2 border-y-4">
			<div className="flex flex-col items-center gap-4 bg-action rounded-2xl p-4 h-max">
				<img
					className="w-5"
					src="./images/icon-plus.svg"
					alt="upvote"
				/>
				<span className="text-counter text-lg">5</span>
				<img
					className="w-5"
					src="./images/icon-minus.svg"
					alt="downvote"
				/>
			</div>
			<div className="flex flex-col">
				<div className="flex justify-between">
					<div>
						<img
							src="./images/avatars/image-juliusomo.png"
							alt="Juliusomo profile picture"
						/>
						<span>Juliusomo</span>
						<span>you</span>
						<span>1 month ago</span>
					</div>
					<div>
						<img src="./images/icon-reply.svg" alt="reply" />
						<span>Reply</span>
					</div>
					<div>
						<div>
							<img src="./images/icon-delete.svg" alt="reply" />
							<span>Delete</span>
						</div>
						<div>
							<img src="./images/icon-edit.svg" alt="reply" />
							<span>Edit</span>
						</div>
					</div>
				</div>
				<p>
					hbvveve uceivne eineiven einceocnrb incwocnvr ivnrvornve
					incosccnveve dovorvrnbni sconeovrbr dvonrovevnowsc eovnribr
				</p>
			</div>
		</div>
	);
};

export default Comment;
