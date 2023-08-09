import React from "react";
import CommentList from "./CommentList";

export default function CommentsContainer() {
	const commentsData = [
		{
			name: "Aryan",
			text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla, voluptates minus vero doloribus laboriosam.",
			replies: [
				{
					name: "Aryan",
					text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla, voluptates minus vero doloribus laboriosam.",
					replies: [],
				},
			],
		},
		{
			name: "Aryan",
			text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla, voluptates minus vero doloribus laboriosam.",
			replies: [],
		},
		{
			name: "Aryan",
			text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla, voluptates minus vero doloribus laboriosam.",
			replies: [
				{
					name: "Aryan",
					text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla, voluptates minus vero doloribus laboriosam.",
					replies: [
						{
							name: "Aryan",
							text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla, voluptates minus vero doloribus laboriosam.",
							replies: [
								{
									name: "Aryan",
									text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla, voluptates minus vero doloribus laboriosam.",
									replies: [],
								},
								{
									name: "Aryan",
									text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla, voluptates minus vero doloribus laboriosam.",
									replies: [],
								},
								{
									name: "Aryan",
									text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla, voluptates minus vero doloribus laboriosam.",
									replies: [],
								},
								{
									name: "Aryan",
									text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla, voluptates minus vero doloribus laboriosam.",
									replies: [],
								},
							],
						},
					],
				},
			],
		},
		{
			name: "Aryan",
			text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla, voluptates minus vero doloribus laboriosam.",
			replies: [],
		},
	];

	return (
		<div className="w-[1100px]">
			<p className="text-2xl font-bold">Comments: </p>
			<CommentList comments={commentsData} />
		</div>
	);
}
