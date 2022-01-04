import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
	Container,
	Arrow,
	Wrapper,
	Slide,
	ImgContainer,
	DetailContainer,
	Img,
	Title,
	Text,
	Button,
} from "./styles";
import { sliderItems } from "../../db";

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = direction => {
		console.log(direction);
	};

	return (
		<Container>
			<Arrow position='left' onClick={() => handleClick("left")}>
				<ArrowBackIosIcon />
			</Arrow>

			<Wrapper>
				{sliderItems.map(item => (
					<Slide bg={item.bg} key={item.id}>
						<ImgContainer>
							<Img src={item.img} />
						</ImgContainer>
						<DetailContainer>
							<Title>{item.title}</Title>
							<Text>{item.desc}</Text>
							<Button>COMPRAR</Button>
						</DetailContainer>
					</Slide>
				))}
			</Wrapper>

			<Arrow position='right' onClick={() => handleClick("right")}>
				<ArrowForwardIosIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
