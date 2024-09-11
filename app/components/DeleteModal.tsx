"use client";

import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

const DeleteModal: FunctionComponent = () => {
	const router = useRouter();

	return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-60 overflow-y-auto h-full w-full flex items-center justify-center">
			<div className="flex flex-col gap-4 p-8 bg-white rounded-2xl sm:w-8/12 lg:w-5/12 xl:w-4/12 mx-3 sm:mx-0">
				<p className="text-usrname font-bold text-xl">Delete comment</p>
				<p className="text-gray-400 font-semibold text-base sm:text-[18px]">
					Are you sure you want to delete this comment? This will
					remove the comment and can't be undone.
				</p>
				<div className="flex justify-between gap-2">
					<button
						onClick={() => router.back()}
						className="bg-gray-500 text-white text-[10px] xs:text-xs sm:text-sm font-bold px-5 py-2 xs:px-7 xs:py-3 rounded-md uppercase"
					>
						No, cancel
					</button>
					<button className="bg-red-400 text-white text-[10px] xs:text-xs sm:text-sm font-bold px-5 py-2 xs:px-7 xs:py-3 rounded-md uppercase">
						Yes, delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;
