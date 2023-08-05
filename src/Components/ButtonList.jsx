import React from "react";
import Button from "./Button";
export default function ButtonList() {
	const names = [
		"All",
		"Live",
		"Gaming ",
		"Music",
		"Food",
		"Culinary Arts",
		"Cricket",
		"Mixes",
		"UFC",
		"Bodybuilding",
		"Ambient Music",
		"Lo-fi",
		"Anime",
		"Manga",
		"Jujutsu",
		"Martial Arts",
	];
	return (
		<div className="flex ">
			{names.map((name) => {
				return <Button name={name} key={name} />;
			})}
		</div>
	);
}
