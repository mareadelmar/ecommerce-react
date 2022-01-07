import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Wrapper, Title, Link } from "./styles";
import { popularProducts } from "../../db";
import ProductItem from "../ProductItem";

const Categories = () => {
	return (
		<>
			<Outlet />
			<Container>
				<Link to='products'>
					<Title>OUR PRODUCTS</Title>
				</Link>
				<Wrapper>
					{popularProducts.map(item => (
						<ProductItem product={item} key={item.id} />
					))}
				</Wrapper>
			</Container>
		</>
	);
};

export default Categories;
