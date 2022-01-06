import React from "react";
import {
	Container,
	Box,
	Logo,
	Text,
	SocialIconsContainer,
	SocialIcons,
	Title,
	List,
	ListItem,
	ContactItem,
} from "./styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
	return (
		<Container>
			<Box>
				<Logo>LAMAR.</Logo>
				<Text>
					Et, sunt illum, sint consequatur deserunt molestias facilis
					nisi eaque non delectus repellat magnam in veniam
					architecto.
				</Text>
				<SocialIconsContainer>
					<SocialIcons bg='3B5999'>
						<FacebookIcon />
					</SocialIcons>
					<SocialIcons bg='E4405F'>
						<InstagramIcon />
					</SocialIcons>
					<SocialIcons bg='55ACEE'>
						<TwitterIcon />
					</SocialIcons>
				</SocialIconsContainer>
			</Box>
			<Box>
				<Title>Useful links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Accesories</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>My account</ListItem>
				</List>
			</Box>
			<Box>
				<Title>Conctac</Title>
				<ContactItem>
					<LocationOnIcon style={{ marginRight: "0.25em" }} />
					742 Evergreen Terrace
				</ContactItem>
				<ContactItem>
					<LocalPhoneIcon style={{ marginRight: "0.25em" }} />
					+1 234 56 78
				</ContactItem>
				<ContactItem>
					<EmailIcon style={{ marginRight: "0.25em" }} />
					shopcontact@lamar.com
				</ContactItem>
			</Box>
		</Container>
	);
};

export default Footer;
