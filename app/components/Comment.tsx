import { FunctionComponent } from "react";
import { Comment as CommentProps } from "../lib/interfaces";

const Comment: FunctionComponent = () => {
	return (
		<div className="flex items-center w-3/4 p-8 bg-white gap-8 rounded-2xl border-solid border-gray-100 border-x-2 border-y-4">
			<div className="flex flex-col items-center gap-4 bg-action rounded-2xl p-4 h-max">
				<img
					className="w-9 cursor-pointer"
					src="./images/icon-plus.svg"
					alt="upvote"
				/>
				<span className="text-counter text-lg font-semibold">5</span>
				<img
					className="w-9 cursor-pointer"
					src="./images/icon-minus.svg"
					alt="downvote"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex justify-between">
					<div className="flex gap-4 items-center">
						<div className="w-9 h-9">
							<img
								src="./images/avatars/image-juliusomo.png"
								alt="Juliusomo profile picture"
							/>
						</div>
						<p className="text-usrname font-bold">Juliusomo</p>
						<span className="bg-otherbg text-white font-semibold px-2 rounded-sm">
							you
						</span>
						<p className="text-gray-400 font-bold">1 month ago</p>
					</div>
					<div className="flex gap-2 items-center">
						<div className="cursor-pointer">
							<img src="./images/icon-reply.svg" alt="reply" />
						</div>
						<span className="text-otherbg font-bold">Reply</span>
					</div>
					<div className="flex gap-4">
						<div className="flex gap-2 items-center">
							<div className="cursor-pointer">
								<img
									src="./images/icon-delete.svg"
									alt="delete"
								/>
							</div>
							<span className="text-red-400 font-bold">
								Delete
							</span>
						</div>
						<div className="flex gap-2 items-center">
							<div className="cursor-pointer">
								<img src="./images/icon-edit.svg" alt="edit" />
							</div>
							<span className="text-otherbg font-bold">Edit</span>
						</div>
					</div>
				</div>
				<p className="text-gray-400 font-semibold text-base text-[18px]">
					<span className="text-usrname">@juliusomo</span> I hbvveve
					uceivne eineiven einceocnrb incwocnvr ivnrvornve
					incosccnveve dovorvrnbni sconeovrbr dvonrovevnowsc eovnribr
					incosccnveve dovorvrnbni sconeovrbr dvonrovevnowsc eovnribr
					incosccnveve dovorvrnbni sconeovrbr dvonrovevnowsc eovnribr
				</p>
			</div>
		</div>
	);
};

export default Comment;
