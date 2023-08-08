import React from "react";

export default function CommentsContainer() {
	const comments = [
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

	return <div className="font-bold text-2xl">Comments :</div>;
}
