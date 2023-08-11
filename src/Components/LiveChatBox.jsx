import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName } from "../utils/helper";

export default function LiveChatBox() {
	const dispatch = useDispatch();
	const messageData = useSelector((store) => store.chat.messages);
	const [newChat, setNewChat] = useState("");
	useEffect(() => {
		//API POLLING
		const timer = setInterval(() => {
			dispatch(
				addMessage({
					name: generateName(),
					message: "JSR",
				})
			);
		}, 3000);

		return () => clearInterval(timer);
	}, []);
	return (
		<div className="flex flex-col">
			<div className="mt-3 h-[600px] w-[425px] flex flex-col-reverse overflow-y-scroll">
				{messageData.map((message, index) => {
					return (
						<LiveMessage
							name={message.name}
							message={message.message}
							key={index}
						/>
					);
				})}
			</div>
			<form
				className=" flex"
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(
						addMessage({
							name: "Aryan Nagbanshi",
							message: newChat,
						})
					);
					setNewChat("");
				}}
			>
				<input
					type="text"
					className="border border-black basis-3/4 rounded-full"
					onChange={(e) => {
						setNewChat(e.target.value);
					}}
					value={newChat}
				/>
				<button
					type="submit"
					className="basis-1/4 rounded-full bg-green-400"
				>
					Send
				</button>
			</form>
		</div>
	);
}
