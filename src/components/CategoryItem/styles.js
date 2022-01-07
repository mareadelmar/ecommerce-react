import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	height: 50vh;
	margin: 8px;
	position: relative;
`;

export const Img = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const Details = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.h3`
	color: white;
	font-size: 32px;
`;

export const Button = styled.button`
	background-color: white;
	border: 0;
	padding: 0.75em;
	cursor: pointer;
	font-weight: 600;
	color: #666;
`;
