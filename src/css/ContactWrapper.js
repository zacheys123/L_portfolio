import styled from 'styled-components';
import background from '../assets/Screenshot_20220602-180208_1.png';
import { media__queries as device } from './media__queries';
export const Wrapper = styled.div`
	background: white;
	background: black;
	overflow: hidden;

	min-height: 88vh;
	display: flex;

	@media ${device.tablet} {
		min-height: max-content;
		display: ${(props) => (props.opennav ? 'none' : 'block')};
	}

	@media ${device.mobileM} {
		display: ${(props) => (props.opennav ? 'none' : '')};
		min-height: max-content;
	}
	@media ${device.mobileS} {
		display: ${(props) => (props.opennav ? 'none' : '')};
		min-height: max-content;
	}

	@media ${device.mobileM} {
		display: ${(props) => (props.opennav ? 'none' : '')};
		min-height: max-content;
	}
`;
export const Left__contact = styled.div`
	flex: 0.4;
	align-items: center;
	justify-content: center;
	margin-top: 7rem;
	min-height: 100%;
	border: none;

	background: linear-gradient(
		hsl(53, 45%, 15%) 10%,
		hsl(323, 75%, 85%) 30%,
		hsl(222, 35%, 7%) 40%
	);
	& span {
		margin-left: 7rem;
		text-decoration: underline;
		font-weight: bold;
		color: lightgrey;
	}
`;
export const Leftcontact__List = styled.div`
	margin-top: 7rem;
	margin-left: 3rem;
	width: 24rem;
	position: relative;
	& ul {
		background: white;
		border-radius: 1rem;

		& li {
			list-style: none;
			display: flex;
			border-bottom: 1px solid grey !important;
			flex-direction: column;
			padding: 1rem;
			margin: 0 0.7rem;
			max-width: 18rem !important;
			padding-left: 5rem;
			font-family: Verdana, sans-serif;
			& span {
				margin-left: 0rem !important;
				text-decoration: underline;
				font-weight: bold;
				color: rgba(234, 123, 14, 0.6);
			}
		}
		& em {
			font-size: 0.9rem !important;
		}
	}
	& img {
		height: 10rem;
		width: 10rem !important;
		border-radius: 100%;
		margin-left: 5rem;
	}
`;
export const Image = styled.div`
	/* background: rgb(287, 343, 246);
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	max-width: 120% !important; */
`;
export const Right__contact = styled.div`
	background: linear-gradient(
		hsl(353, 45%, 15%) 10%,
		hsl(323, 75%, 85%) 30%,
		hsl(227, 55%, 7%) 40%
	);
	flex: 0.6;
	margin-top: 7rem;
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Div = styled.div`
	/* height: 25rem;
	border: 2px solid white;
	margin: 6rem 0;
	background: linear-gradient(
		hsl(353, 45%, 15%) 10%,
		hsl(323, 75%, 85%) 30%,
		hsl(123, 45%, 7%) 40%
	); */
`;
export const Form = styled.form`
	max-width: 24rem;

	& input {
		width: 100%;
		padding: 0.6rem;
		margin-bottom: 1.5rem;
		border: none;
		margin-top: 1.5rem;

		color: white;
		outline: none;
		border-bottom: 2px solid lightgrey;
		background: inherit;

		&:focus {
			border-left: 1px solid grey;
		}
	}
	& select {
		width: 100%;
		padding: 0.6rem;
		margin-bottom: 1.5rem;
		margin-top: 1.5rem;
	}
	& h5 {
		color: white;
		text-decoration: underline;
	}
	& span {
		color: red;
		font-size: 1.3rem;
	}
`;

export const Form__div = styled.div`
	background: linear-gradient(
		hsl(123, 45%, 15%) 10%,
		hsl(223, 45%, 85%) 30%,
		hsl(343, 45%, 7%) 40%
	);
	border-radius: 10px;
	padding: 1.9rem;
`;
