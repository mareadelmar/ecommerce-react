import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
	display: flex;
`;

export const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 70%;
	margin: 2em 0;
`;

export const ImgContainer = styled.div`
	flex: 1;
`;

export const Img = styled.img`
	object-fit: cover;
	width: 100%;
	height: 80vh;
`;

export const TextContainer = styled.div`
	flex: 1;
	padding: 0 2em;
`;

export const Title = styled.h2`
	font-weight: 300;
	margin: 1em 0;
`;

export const Price = styled.p`
	font-weight: 300;
	font-size: 32px;
	margin: 0.5em 0;
`;

export const FilterType = styled.span`
	font-weight: 300;
	margin: 0 0.25em;
	font-size: 20px;
`;

export const FilterColor = styled.div`
	display: flex;
	align-items: center;
`;

export const ColorOption = styled.div`
	width: 32px;
	height: 32px;
	background-color: ${props => props.color};
	margin: 0 0.25em;
	border-radius: 50%;
	cursor: pointer;
`;

export const SizeFilter = styled.select`
	padding: 0.5em;
	margin: 0 0.25em;
	border: 0.5px solid lightgray;
	background-color: transparent;
`;

export const AddContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 70%;
`;

export const AmountBox = styled.div`
	display: flex;
	align-items: center;
	font-size: 20px;
	font-weight: 600;
`;

export const Amount = styled.span`
	height: 32px;
	width: 32px;
	border-radius: 4px;
	border: 1px solid lightgrey;
	display: grid;
	place-items: center;
	margin: 0 0.5em;
`;

export const Button = styled.button`
	border: 2px solid var(--color-accent);
	background-color: transparent;
	padding: 0.75em;
	cursor: pointer;
	font-weight: 600;

	&:hover {
		background-color: #f2f2f2;
	}
`;
