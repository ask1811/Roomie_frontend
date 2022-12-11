import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./footerstyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "red",
				textAlign: "center",
				marginTop:"-60px"  }}>
		ROOMIE:The easiest way to find a mate
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="/aim">Aim</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="/login">Post Listing</FooterLink>
			<FooterLink href="/login">Find a Room</FooterLink>
			
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.twitter.com/">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
