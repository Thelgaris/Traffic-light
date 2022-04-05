import React, { useState, useEffect } from "react";

const Home = () => {
	const [select, setSelect] = useState("yellow");

	return (
		<div className="Trafficlightbody">
			<div
				className={
					"bg-secondary " +
					(select == "red" ? "bg-danger" : "bg-secondary")
				}
				onClick={() => {
					setSelect("red");
				}}></div>
			<div
				className={
					"bg-secondary " +
					(select == "yellow" ? "bg-warning" : "bg-secondary")
				}
				onClick={() => {
					setSelect("yellow");
				}}></div>
			<div
				className={
					"bg-secondary " +
					(select == "green" ? "bg-success" : "bg-secondary")
				}
				onClick={() => {
					setSelect("green");
				}}></div>
			{select == "red" ? <h1>{select}</h1> : <h1>x</h1>}
			{select == "yellow" ? <h1>{select}</h1> : <h1>x</h1>}
			{select == "green" ? <h1>{select}</h1> : <h1>x</h1>}
			useEffect((){setInterval({ setSelect }, 1000, { setSelect })})
		</div>
	);
};

export default Home;
