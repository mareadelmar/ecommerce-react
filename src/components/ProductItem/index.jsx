import React from "react";
import { Container, Circle, Img, Icons, Icon } from "./styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ProductItem = ({ product }) => {
	return (
		<Container>
			<Circle>
				<Img src={product.img} />
				<Icons>
					<Icon>
						<ShoppingCartOutlinedIcon />
					</Icon>
					<Icon>
						<SearchOutlinedIcon />
					</Icon>
					<Icon>
						<FavoriteBorderOutlinedIcon />
					</Icon>
				</Icons>
			</Circle>
		</Container>
	);
};

export default ProductItem;
