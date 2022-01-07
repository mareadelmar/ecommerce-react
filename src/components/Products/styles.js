import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
	min-height: 90vh;
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
	display: flex;
	flex-wrap: wrap;
`;
