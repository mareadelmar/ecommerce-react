import styled from "styled-components";

export const Icons = styled.div`
	opacity: 0;
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.2);
	cursor: pointer;
	transition: all 0.5s ease;
`;

export const Container = styled.div`
	flex: 1;
	margin: 8px;
	min-width: 360px;
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;
	&:hover ${Icons} {
		opacity: 1;
	}
`;

export const Circle = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: white;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Img = styled.img`
	height: 75%;
	z-index: 2;
`;

export const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	margin: 10px;

	&:hover {
		background: var(--color-pink);
		transform: scale(1.1);
	}
`;
