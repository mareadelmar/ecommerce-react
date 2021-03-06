import React from "react";
import { Container, Circle, Img, Icons, Icon, Link } from "./styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ProductItem = ({ product }) => {
	console.log(product);

	const handleAdd = () => {
		console.log("add to cart", product.id);
	};

	return (
		<Container>
			<Circle>
				<Img src={product.img} />
				<Icons>
					<Icon onClick={handleAdd}>
						<ShoppingCartOutlinedIcon />
					</Icon>
					<Icon>
						<Link to={`details/${product.id}`}>
							<SearchOutlinedIcon />
						</Link>
					</Icon>
					{/* <Icon>
						<FavoriteBorderOutlinedIcon />
					</Icon> */}
				</Icons>
			</Circle>
		</Container>
	);
};

export default ProductItem;
