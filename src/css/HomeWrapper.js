import styled from 'styled-components';
import { media__queries as device } from '../css/media__queries';

export const Wrapper = styled.div`
	background: linear-gradient(
		hsl(110, 40%, 0%) 20%,
		hsl(210, 90%, 3%) 50%
	);
	margin-top: 0.8rem;
	display: flex;
	min-height: 88vh;
`;

export const Header = styled.div`
	font-family: 'Joan', serif;
	text-align: 'center';
	color: rgba(233, 45, 127, 0.4) !important;
	font-size: 1.6rem;
	font-weight: bold;
`;
export const Static = styled.h4`
	color: white;
	font-size: 60px;
	font-weight: 600;
`;
export const Dynamic = styled.ul`
	margin-left: 10px;
	line-height: 89px;
	height: 93px;
	overflow: hidden;
`;
export const DynamicList = styled.li`
	color: #fc6d6d;
	list-style: none;
	font-size: 63px;
	position: relative;
	font-weight: 500;
	top:.4rem;
	animation: slide 6s steps(4) infinite;
		}
		@keyframes slide {
			100% {
			top:-350px;
			}
		}
	& span {
		position: relative;
		 font-family: 'Hubballi', cursive;
		&::after {
			content: '';
			position: absolute;
			height: 110%;
			left: 0;
			width: 100%;
			background: linear-gradient(
		hsl(110, 40%, 0%) 20%,
		hsl(210, 90%, 3%) 50%
	);
			border-left: 2px solid #fc5d6d;
			animation: typing 1.5s steps(10) infinite;
		}
		@keyframes typing {
			100% {
				left: 100%;
				margin: 10px -35px 0 35px;
			}
		}
	
`;

export const Info__div = styled.div`
	margin-top: 30%;
	flex: 0.5;
`;
export const Image__div = styled.div`
	flex: 0.5;
	display: flex;
	align-items: center;
	position: relative;

	& img {
		height: 100%;
		margin-left: 9rem;
		border-radius: 100% !important;
		object-fit: fill;
		object-position: top;
		transition: all 0.4s ease-in-out;
		width: 100%;
		filter: grayscale(0);

		&:hover {
			filter: grayscale(100%);
		}
	}
`;
export const Image = styled.div`
	max-width: 29rem !important;
	min-height: 3rem !important;

	@media ${device.tablet} {
		margin-left: -9rem !important;
	}
`;
export const info = styled.div`
	padding-left: 1rem !important;
`;

export const Box = styled.div`
	outline: none;
	border: none;
	display: block;
	border: 1px solid inherit;
	border-radius: 15px;
	padding: 2rem 1rem;
`;
