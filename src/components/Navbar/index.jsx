import React from "react";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
	Container,
	Wrapper,
	Search,
	Logo,
	Input,
	Menu,
	MenuItem,
} from "./styles.js";

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
