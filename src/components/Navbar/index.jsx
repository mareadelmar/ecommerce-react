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
	Link,
} from "./styles.js";

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Search>
					<SearchIcon />
					<Input />
				</Search>
				<Link to='/'>
					<Logo>LAMAR.</Logo>
				</Link>
				<Menu>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>

					<MenuItem>
						<Link to='cart'>
							<Badge badgeContent={2} color='secondary'>
								<ShoppingCartIcon />
							</Badge>
						</Link>
					</MenuItem>
				</Menu>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
