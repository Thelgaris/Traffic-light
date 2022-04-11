import React, { useState, useEffect } from "react";

const Home = () => {
	const [select, setSelect] = useState("");

	return (
		<div className="Trafficlightbody">
			<div
				className={
					"bg-secondary " +
					(select == "red" ? "bg-danger && glow " : "bg-secondary")
				}
				onClick={() => {
					setSelect("red");
				}}></div>
			<div
				className={
					"bg-secondary " +
					(select == "yellow"
						? "bg-warning && glow "
						: "bg-secondary")
				}
				onClick={() => {
					setSelect("yellow");
				}}></div>
			<div
				className={
					"bg-secondary " +
					(select == "green" ? "bg-success && glow " : "bg-secondary")
				}
				onClick={() => {
					setSelect("green");
				}}></div>
			{select == "red" ? <h1>{select}</h1> : <h1>x</h1>}
			{select == "yellow" ? <h1>{select}</h1> : <h1>x</h1>}
			{select == "green" ? <h1>{select}</h1> : <h1>x</h1>}
		</div>
	);
};

export default Home;
