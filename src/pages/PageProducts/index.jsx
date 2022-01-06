import React from "react";
import { Container, FilterContainer, FilterType, Select } from "./styles";
import Products from "../../components/Products";

const PageProducts = () => {
	return (
		<Container>
			<h2>title</h2>
			<FilterContainer>
				<div>
					<FilterType>Filter products:</FilterType>
					<Select>
						<option disabled selected>
							Color
						</option>
						<option>White</option>
						<option>Black</option>
						<option>Red</option>
						<option>Blue</option>
						<option>Green</option>
						<option>Pink</option>
					</Select>
					<Select>
						<option disabled selected>
							Size
						</option>
						<option>XXS</option>
						<option>XS</option>
						<option>M</option>
						<option>L</option>
						<option>XL</option>
						<option>XXL</option>
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
