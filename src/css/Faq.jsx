import styled from 'styled-components';
import background from '../assets/newback.jpg';
import right from '../assets/newback2.jpg';

import { media__queries as device } from './media__queries';

export const Wrapper = styled.div`
	background-image: url(${background});

	background-repeat: no-repeat;
	background-position: fixed;
	background-size: cover;
	min-height: 85vh;
	display: flex;
	max-width: 100%;
`;
export const Left_faq = styled.div`
	flex: 0.25;
	max-height: 100%;
	margin-top: 10rem;
	border-right: 1px solid lightgrey;
	z-index: 1;
	& li {
		list-style: none;
		font-size: 1.2rem;
		margin-top: 5rem;
		color: white;
		font-family: Verdana, sans-serif;
		position: relative;
		padding-bottom: 0.6rem;
		padding-left: 0.5rem;
		cursor: pointer;
		max-width: 90%;
		transition: all 0.5s ease-in-out;
		border-bottom: 1px solid lightgrey;

		&::before {
			content: '';
			bottom: 0;
			height: 1px;
			width: 65%;
			background: white;
			transform: scaleX(1);
			transform-origin: left;
			transition: transform 0.4s ease-in-out;
		}
		&:hover {
			background: grey;
		}
	}
`;
export const Right_faq = styled.div`
	flex: 0.75;
	max-height: 100%;
	position: relative;
	background-image: url(${right});
	overflow-y: auto;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	flex-grow: 1;
	& ol {
		display: flex;
		min-height: 8vh;
		flex-direction: column;
		margin: 4rem auto auto 13rem;
	}
	& li {
		list-style: none;
		max-width: 83%;
		margin-bottom: 1rem;
		border-radius: 10px;
		border-radius: 4rem;
		padding: 1.5rem;
		& p {
			background: linear-gradient(
				hsl(230, 34%, 70%) 20%,
				hsl(390, 34%, 70%)
			);
			padding: 1rem;
			color: white;
			font-size: 1.3rem;
		}
	}
	& code {
		font-size: 1.3rem;
		text-decoration: underline;
		margin-left: 1.5rem !important;
		cursor: pointer;
		color: ${({ isdropdown }) => (isdropdown ? 'red' : 'lightblue')};
		padding-bottom: 0.4rem;
		text-decoration-color: grey;
	}
`;
export const PersonalWrapper = styled.div`
	display: none;
	position: absolute;
`;
export const TechWrapper = styled.div`
	display: none;
	position: absolute;
`;
export const MusicWrapper = styled.div`
	display: none;
	position: absolute;
`;
export const OtherWrapper = styled.div`
	display: none;
	position: absolute;
`;
