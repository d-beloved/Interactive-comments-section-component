import { FunctionComponent } from "react";
import { Comment as CommentProps } from "../lib/interfaces";
import Link from "next/link";

const CommentActions: FunctionComponent = () => {
	return (
		<div className="flex gap-4">
			{/* <div className="flex gap-2 items-center cursor-pointer">
				<div>
					<img src="./images/icon-reply.svg" alt="reply" />
				</div>
				<span className="text-otherbg font-bold">Reply</span>
			</div> */}
			<Link
				href="/?show=true"
				className="flex gap-2 items-center cursor-pointer"
			>
				<div>
					<img src="./images/icon-delete.svg" alt="delete" />
				</div>
				<span className="text-red-400 font-bold">Delete</span>
			</Link>
			<div className="flex gap-2 items-center cursor-pointer">
				<div>
					<img src="./images/icon-edit.svg" alt="edit" />
				</div>
				<span className="text-otherbg font-bold">Edit</span>
			</div>
		</div>
	);
};

const Comment: FunctionComponent = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row items-center p-8 bg-white gap-8 rounded-2xl border-solid border-gray-100 border-x-2 border-y-4 shadow-md">
			<div className="max-md:flex max-md:justify-between max-md:items-center max-md:gap-4 max-md:w-full">
				<div className="flex md:flex-col items-start gap-4 bg-action rounded-2xl py-2 px-5 md:p-4 md:h-max">
					<img
						className="md:w-9 w-3 cursor-pointer"
						src="./images/icon-plus.svg"
						alt="upvote"
					/>
					<span className="text-counter text-lg font-semibold">
						5
					</span>
					<img
						className="md:w-9 w-3 cursor-pointer"
						src="./images/icon-minus.svg"
						alt="downvote"
					/>
				</div>
				<div className="block md:hidden">
					<CommentActions />
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex justify-between">
					<div className="flex gap-4 items-center">
						<div className="w-9 h-9 self-center">
							<img
								// className="w-full h-full"
								src="./images/avatars/image-juliusomo.png"
								alt="Juliusomo profile picture"
							/>
						</div>
						<p className="text-usrname font-bold text-[14px] sm:text-base">
							Juliusomo
						</p>
						<span className="bg-otherbg text-white font-semibold px-2 rounded-sm text-[14px] sm:text-base">
							you
						</span>
						<p className="text-gray-400 font-bold text-[14px] sm:text-base">
							11 months ago
						</p>
					</div>
					<div className="hidden md:flex">
						<CommentActions />
					</div>
				</div>
				<p className="text-gray-400 font-semibold text-base sm:text-[18px]">
					<span className="text-usrname">@juliusomo</span> I hbvveve
					uceivne eineiven einceocnrb incwocnvr ivnrvornve
					incosccnveve dovorvrnbni sconeovrbr dvonrovevnowsc eovnribr
					incosccnveve dovorvrnbni sconeovrbr dvonrovevnowsc eovnribr
				</p>
			</div>
		</div>
	);
};

export default Comment;
