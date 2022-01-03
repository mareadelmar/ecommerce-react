import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image from "../../assets/1.svg";
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

const Slider = () => {
	return (
		<Container>
			<Arrow position='left'>
				<ArrowBackIosIcon />
			</Arrow>

			<Wrapper>
				<Slide>
					<ImgContainer>
						<Img src='https://freesvg.org/img/1357816095.png' />
					</ImgContainer>
					<DetailContainer>
						<Title>LIQUIDACIÓN</Title>
						<Text>
							20% OFF EN TODA LA COLECCIÓN HASTA AGOTAR STOCK
						</Text>
						<Button>COMPRAR</Button>
					</DetailContainer>
				</Slide>
				<Slide>
					<ImgContainer>
						<Img src='https://freesvg.org/img/1357816095.png' />
					</ImgContainer>
					<DetailContainer>
						<Title>PRIMAVERA/VERANO</Title>
						<Text>
							20% OFF EN TODA LA COLECCIÓN HASTA AGOTAR STOCK
						</Text>
						<Button>COMPRAR</Button>
					</DetailContainer>
				</Slide>
			</Wrapper>

			<Arrow position='right'>
				<ArrowForwardIosIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
