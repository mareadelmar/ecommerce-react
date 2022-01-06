import React from "react";
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
} from "./styles";

const PageProductDetail = () => {
	return (
		<Container>
			<Wrapper>
				<ImgContainer>
					<Img src='' alt='' />
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
				</TextContainer>
			</Wrapper>
		</Container>
	);
};

export default PageProductDetail;
