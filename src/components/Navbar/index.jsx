import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Container = styled.section`
	height: 60px;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
`;

const Search = styled.div`
	flex: 1;
	border: 0.5px solid lightgrey;
	display: flex;
	align-items: center;
	color: grey;
`;

const Input = styled.input`
	border: none;
	font-size: 16px;
`;

const Logo = styled.h1`
	flex: 1;
	font-weight: bolder;
	text-align: center;
	font-size: 32px;
`;

const Menu = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin: 0 8px;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Search>
					<SearchIcon />
					<Input />
				</Search>
				<Logo>LAMA.</Logo>
				<Menu>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>

					<MenuItem>
						<Badge badgeContent={1} color='secondary'>
							<ShoppingCartIcon />
						</Badge>
					</MenuItem>
				</Menu>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
