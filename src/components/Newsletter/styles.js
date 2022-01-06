import styled from "styled-components";

export const Container = styled.div`
	height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: var(--color-pink);
`;

export const Title = styled.h2`
	font-size: 48px;
	margin: 0.25em;
`;

export const Text = styled.p`
	font-size: 24px;
	margin-bottom: 2em;
`;

export const InputContainer = styled.div`
	height: 2.5em;
	width: 50%;
	background-color: #f2f2f2;
	border: 1px solid lightgrey;
	display: flex;
	justify-content: space-between;
`;

export const Input = styled.input`
	border: none;
	flex: 9;
	padding: 0.5em;
`;

export const Button = styled.button`
	flex: 1;
	border: none;
	color: white;
	background-color: var(--color-accent);
`;
