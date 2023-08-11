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
		}, 1500);

		return () => clearInterval(timer);
	}, []);
	return (
		<div className="flex flex-col border border-black rounded-lg mt-1">
			<div className="mt-3 h-[580px] w-[425px] flex flex-col-reverse overflow-y-scroll">
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
				className="flex mt-1"
				onSubmit={(e) => {
					e.preventDefault();
					newChat !== "" &&
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
					className="border border-black basis-3/4 rounded-full px-3 py-1"
					onChange={(e) => {
						setNewChat(e.target.value);
					}}
					value={newChat}
					maxLength={14}
					minLength={1}
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
