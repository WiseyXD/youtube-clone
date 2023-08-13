import React from "react";
import Comments from "./Comments";

export default function CommentList({ comments }) {
	return (
		<div className="bg-gray-50">
			{comments.map((comment, index) => {
				return (
					<>
						<Comments key={index} data={comment} />
						<div className="pl-5 border-l-4 border-grey-200 rounded-bl-xl">
							<CommentList comments={comment.replies} />
						</div>
					</>
				);
			})}
		</div>
	);
}
