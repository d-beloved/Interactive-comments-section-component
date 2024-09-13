export interface CommentComponentProps {
	comment: CommentProps | ReplyProps;
}

export interface CommentProps {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: UserProps;
	replies: ReplyProps[];
}

export interface ReplyProps {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: UserProps;
	replyingTo: string;
}

export interface UserProps {
	image: ImageProps;
	username: string;
}

export interface ImageProps {
	png?: string;
	webp?: string;
}

export type SearchParamProps = {
	searchParams: Record<string, string> | null | undefined;
};
