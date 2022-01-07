import React from "react";
import {
	Container,
	Title,
	TopBox,
	TopButton,
	TopText,
	BottomBox,
	Info,
	Summary,
	SummaryTitle,
	Product,
	ProductDetail,
	Img,
	Text,
	ProductColor,
	ProductPrice,
	Hr,
	SummaryItem,
	SummaryButtom,
} from "./styles";
import { AmountBox, Amount, Price } from "../PageProductDetail/styles";

const PageCart = () => {
	return (
		<Container>
			<div>
				<Title>YOUR BAG</Title>
				<TopBox>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<div>
						<TopText>Shopping bag (2)</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</div>
					<TopButton type='filled'>CHECKOUT NOW</TopButton>
				</TopBox>

				<BottomBox>
					<Info>
						<Product>
							<ProductDetail>
								<Img
									src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'
									alt=''
								/>
								<div>
									<Text>
										<strong>Product:</strong> PEPELOCO SHOES
									</Text>
									<Text>
										<strong>ID:</strong>2656894626
									</Text>
									<ProductColor color='black' />
									<Text>
										<strong>Size:</strong> 38
									</Text>
								</div>
							</ProductDetail>
							<ProductPrice>
								<AmountBox>
									<span>+</span>
									<Amount>1</Amount>
									<span>-</span>
								</AmountBox>
								<Price>$ 30</Price>
							</ProductPrice>
						</Product>

						<Hr />

						<Product>
							<ProductDetail>
								<Img
									src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png'
									alt=''
								/>
								<div>
									<Text>
										<strong>Product:</strong> PIRULA T-SHIRT
									</Text>
									<Text>
										<strong>ID:</strong>2656894626
									</Text>
									<ProductColor color='grey' />
									<Text>
										<strong>Size:</strong> L
									</Text>
								</div>
							</ProductDetail>
							<ProductPrice>
								<AmountBox>
									<span>+</span>
									<Amount>1</Amount>
									<span>-</span>
								</AmountBox>
								<Price>$ 20</Price>
							</ProductPrice>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<span>
								<strong>Subtotal</strong>
							</span>
							<span> $ 80</span>
						</SummaryItem>
						<SummaryItem>
							<span>
								<strong>Shipping</strong>
							</span>
							<span> $ 5</span>
						</SummaryItem>
						<SummaryItem type='total'>
							<span>
								<strong>Total</strong>
							</span>
							<span> $ 85</span>
						</SummaryItem>
						<SummaryButtom>CHECKOUT NOW</SummaryButtom>
					</Summary>
				</BottomBox>
			</div>
		</Container>
	);
};

export default PageCart;
