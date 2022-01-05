import React from "react";
import { Container } from "./styles";
import { categories } from "../../db";
import CategoryItem from "../CategoryItem";

const Categories = () => {
	return (
		<Container>
			{categories.map(item => (
				<CategoryItem category={item} key={item.id} />
			))}
		</Container>
	);
};

export default Categories;
