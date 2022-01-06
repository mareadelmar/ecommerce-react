import React from "react";
import {
	Container,
	FilterContainer,
	FilterType,
	Select,
	Option,
} from "./styles";
import Products from "../../components/Products";

const PageProducts = () => {
	return (
		<Container>
			<h2>title</h2>
			<FilterContainer>
				<div>
					<FilterType>Filter products:</FilterType>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Green</Option>
						<Option>Pink</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>XXS</Option>
						<Option>XS</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
						<Option>XXL</Option>
					</Select>
				</div>
				<div>
					<FilterType>Sort products:</FilterType>
					<Select>
						<Option disabled selected>
							Newest
						</Option>
						<Option>Price (asc)</Option>
						<Option>Price (desc)</Option>
					</Select>
				</div>
			</FilterContainer>
			<Products />
		</Container>
	);
};

export default PageProducts;
