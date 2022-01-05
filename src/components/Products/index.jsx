import React from "react";
import { Container } from "./styles";
import { popularProducts } from "../../db";
import ProductItem from "../ProductItem";

const Categories = () => {
	return (
		<Container>
			{popularProducts.map(item => (
				<ProductItem product={item} key={item.id} />
			))}
		</Container>
	);
};

export default Categories;
