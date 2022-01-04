import styled from "styled-components";

export const Container = styled.div`
	height: 90vh;
	width: 100%;
	display: flex;
	position: relative;
`;

export const Arrow = styled.div`
	height: 50px;
	width: 50px;
	background-color: #f2f2f2;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	left: ${props => props.position === "left" && "10px"};
	right: ${props => props.position === "right" && "10px"};
	cursor: pointer;
	opacity: 0.7;
	overflow: hidden;
	z-index: 2;
`;

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${props => props.slideIndex * -100}vw);
	transition: all 1.5s ease;
`;

export const Slide = styled.div`
	height: 90vh;
	width: 100vw;
	display: flex;
	align-items: center;
	background-color: #${props => props.bg};
`;

export const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
`;

export const DetailContainer = styled.div`
	flex: 1;
	padding: 2.5em;
`;

export const Img = styled.img`
	height: 80%;
`;

export const Title = styled.h1`
	font-size: 48px;
	letter-spacing: 2px;
`;
export const Text = styled.p`
	font-size: 24px;
	padding: 0.5em 0;
	font-weight: 500;
	letter-spacing: 2px;
`;
export const Button = styled.button`
	font-size: 16px;
	padding: 0.5em;
	background: transparent;
	border: 2px solid black;
	cursor: pointer;
`;
