import React from "react";
import { Container, Img, Details, Title, Button } from "./styles";

const CategoryItem = ({ category }) => {
	return (
		<Container key={category.id}>
			<Img src={category.img} />
			<Details>
				<Title>{category.title}</Title>
				<Button>COMPRAR</Button>
			</Details>
		</Container>
	);
};

export default CategoryItem;
