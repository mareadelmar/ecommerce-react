import React from "react";
import {
	Container,
	Title,
	Text,
	InputContainer,
	Input,
	Button,
} from "./styles";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Text>
				Subscribe to our newsletter to get all the news about your
				favorite product
			</Text>
			<InputContainer>
				<Input placeholder='Email' />
				<Button>
					<SendIcon />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
