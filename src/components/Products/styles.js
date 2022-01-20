import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Link = styled(LinkRouter)`
	text-decoration: none;
	color: black;
`;

export const Title = styled.h1`
	font-weight: 300;
	text-align: center;
	margin: 1em 0;
`;

export const Wrapper = styled.div`
	width: 90%;
	display: flex;
	flex-wrap: wrap;
`;
