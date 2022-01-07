import styled from "styled-components";

export const Container = styled.div`
	margin: 3em 0;
	padding: 3em;
`;

export const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

export const TopBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.5em;
`;

export const TopButton = styled.button`
	padding: 0.75em;
	font-weight: 600;
	cursor: pointer;
	border: ${props => props.type === "filled" && "none"};
	background-color: ${props =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${props => props.type === "filled" && "white"};
`;

export const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0 0.5em;
`;

export const BottomBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Info = styled.span`
	flex: 3;
`;

export const Summary = styled.span`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 8px;
	padding: 0.75em;
`;

export const SummaryTitle = styled.h3`
	font-weight: 300;
	text-align: center;
	font-size: 24px;
`;

export const Product = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

export const Img = styled.img`
	width: 220px;
	object-fit: contain;
	margin: 1em 2em;
`;

export const Text = styled.p`
	padding: 0.5em 0;
`;

export const ProductColor = styled.div`
	height: 32px;
	width: 32px;
	border-radius: 50%;
	background-color: ${props => props.color};
`;

export const ProductPrice = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

// export const AmountBox = styled.div`
// 	display: flex;
// 	align-items: center;
// `;

export const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

export const SummaryItem = styled.div`
	margin: 0.75em 0;
	display: flex;
	justify-content: space-between;
	font-size: ${props => props.type === "total" && "24px"};
`;

export const SummaryButtom = styled.button`
	background-color: black;
	font-size: 14px;
	padding: 0.5em;
	width: 100%;
	color: white;
	font-weight: 700;
`;
