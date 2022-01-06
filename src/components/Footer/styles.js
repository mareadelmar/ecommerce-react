import styled from "styled-components";

export const Container = styled.div`
	display: flex;
`;

export const Box = styled.div`
	flex: 1;
	margin: 2em;
`;

export const Logo = styled.h1`
	margin: 0.5em 0.75em;
`;

export const Text = styled.p`
	margin: 0.75em 1.75em;
`;

export const SocialIconsContainer = styled.div`
	display: flex;
	margin: 1.5em;
`;

export const SocialIcons = styled.div`
	background-color: #${props => props.bg};
	margin: 0 0.5em;
	color: white;
	height: 30px;
	width: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
`;

export const Title = styled.h4`
	font-weight: 600;
	margin-bottom: 1em;
	font-size: 24px;
`;

export const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

export const ListItem = styled.li`
	width: 50%;
	margin-bottom: 0.25em;
`;

export const ContactItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 0.75em;
`;
