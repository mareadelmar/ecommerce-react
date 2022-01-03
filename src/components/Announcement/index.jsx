import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 30px;
	background-color: teal;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Announcement = () => {
	return <Container>6 coutas sin interés en todos los productos</Container>;
};

export default Announcement;
