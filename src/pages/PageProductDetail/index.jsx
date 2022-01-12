import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { popularProducts } from "../../db";
import {
	Container,
	Wrapper,
	ImgContainer,
	Img,
	TextContainer,
	Title,
	Price,
	ColorOption,
	FilterContainer,
	SizeFilter,
	FilterType,
	FilterColor,
	AddContainer,
	AmountBox,
	Amount,
	Button,
} from "./styles";

const PageProductDetail = () => {
	const [product, setProduct] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const item = popularProducts.filter(
			product => product.id === Number(id)
		);
		console.log("item", item, id);
		setProduct(item);
	}, []);

	const handleAdd = () => {
		console.log("add to cart", itemId);
	};

	if (!product) return <p>Loading...</p>;
	return (
		<Container>
			<Wrapper>
				<ImgContainer>
					<Img src={product.img} alt='' />
				</ImgContainer>
				<TextContainer>
					<Title>produc title</Title>
					<p>
						description. Aperiam totam reiciendis fugit dolorem quis
						laboriosam sunt architecto, commodi ipsa eum ratione
						perspiciatis sint sequi suscipit saepe et rerum a
						mollitia!
					</p>
					<Price>$ 20</Price>

					<FilterContainer>
						<FilterColor>
							<FilterType>Color</FilterType>
							<ColorOption color='black' />
							<ColorOption color='darkblue' />
							<ColorOption color='darkred' />
						</FilterColor>

						<div>
							<FilterType>Size</FilterType>
							<SizeFilter>
								<option>XXS</option>
								<option>XS</option>
								<option>S</option>
								<option>M</option>
								<option>L</option>
								<option>XL</option>
								<option>XXL</option>
							</SizeFilter>
						</div>
					</FilterContainer>

					<AddContainer>
						<AmountBox>
							<span>+</span>
							<Amount>1</Amount>
							<span>-</span>
						</AmountBox>
						<Button onClick={handleAdd}>ADD TO CART</Button>
					</AddContainer>
				</TextContainer>
			</Wrapper>
		</Container>
	);
};

export default PageProductDetail;
