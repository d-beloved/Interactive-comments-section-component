export interface Comment {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: User;
	replies: Reply[];
}

export interface Reply extends Omit<Comment, "replies"> {
	replyingTo: string;
}

export interface User {
	image: Image;
	username: string;
}

export interface Image {
	png?: string;
	webp?: string;
}

export type SearchParamProps = {
	searchParams: Record<string, string> | null | undefined;
};
