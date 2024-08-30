import { FunctionComponent } from "react";
import { Comment as CommentProps } from "../lib/interfaces";

const Comment: FunctionComponent = () => {
	return (
		<div className="">
			<div>
				<img src="./images/icon-plus.svg" alt="upvote" />
				<span>5</span>
				<img src="./images/icon-minus.svg" alt="downvote" />
			</div>
			<div>
				<div>
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
