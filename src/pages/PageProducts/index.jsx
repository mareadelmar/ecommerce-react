import React from "react";
import { Container, FilterContainer, FilterType, Select } from "./styles";
import Products from "../../components/Products";

const PageProducts = () => {
	return (
		<Container>
			<FilterContainer>
				<div>
					<FilterType>Filter products:</FilterType>
					<Select>
						<option disabled selected>
							Color
						</option>
						<option value='White'>White</option>
						<option value='Black'>Black</option>
						<option value='Red'>Red</option>
						<option value='Blue'>Blue</option>
						<option value='Green'>Green</option>
						<option value='Pink'>Pink</option>
					</Select>
					<Select>
						<option disabled selected>
							Size
						</option>
						<option value='XXS'>XXS</option>
						<option value='XS'>XS</option>
						<option value='M'>M</option>
						<option value='L'>L</option>
						<option value='XL'>XL</option>
						<option value='XXL'>XXL</option>
					</Select>
				</div>
				<div>
					<FilterType>Sort products:</FilterType>
					<Select>
						<option disabled selected>
							Newest
						</option>
						<option value='price-asc'>Price (asc)</option>
						<option value='price-desc'>Price (desc)</option>
					</Select>
				</div>
			</FilterContainer>
			<Products />
		</Container>
	);
};

export default PageProducts;
