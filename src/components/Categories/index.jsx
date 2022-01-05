import React from "react";
import { Container } from "./styles";
import { categories } from "../../db";

const Categories = () => {
	return (
		<Container>
			{categories.map(item => {
				console.log(item);
			})}
		</Container>
	);
};

export default Categories;
