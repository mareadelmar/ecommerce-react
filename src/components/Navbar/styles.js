import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.section`
	*height: 60px;
`;

export const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
`;

export const Search = styled.div`
	flex: 1;
	max-width: 32ch;
	border: 0.5px solid lightgrey;
	display: flex;
	align-items: center;
	color: grey;
`;

export const Input = styled.input`
	border: none;
	font-size: 16px;
	width: 100%;
`;

export const Link = styled(LinkRouter)`
	text-decoration: none;
	text-align: center;
	flex: 1;
	color: black;
`;

export const Logo = styled.h1`
	font-weight: bolder;
	font-size: 48px;
	margin: 8px;
`;

export const Menu = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin: 0 8px;
`;
