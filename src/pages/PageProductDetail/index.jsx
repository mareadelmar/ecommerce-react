import React from "react";
import {
	Container,
	Wrapper,
	ImgContainer,
	Img,
	TextContainer,
	Title,
	Price,
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
				</TextContainer>
			</Wrapper>
		</Container>
	);
};

export default PageProductDetail;
