import React from "react";

export default function Comments({ data }) {
	const { name, text, replies } = data;
	return (
		<div className="text-2xl mt-4 bg-gray-200 rounded-lg py-2">
			<div className="flex">
				<img
					src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
					alt="userLogo"
					className="w-[4%] ml-3 rounded-full"
				/>
				<div className="pl-2 pt-1">
					<p className="font-bold text-lg">{name}</p>
					<p className="text-base">{text}</p>
				</div>
			</div>
		</div>
	);
}
