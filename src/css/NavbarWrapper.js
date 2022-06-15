import styled from 'styled-components';
import { media__queries as device } from '../css/media__queries';

export const Wrapper = styled.div`
	display: flex;
	position: sticky;
	background: rgba(33, 65, 87) !important;
	justify-content: space-around;
	align-items: center;
	padding: 1rem 2rem 0.7rem;
	background-color: white;
	flex-wrap: wrap;
	@media ${device.tablet} {
		justify-content: space-between;
		background: rgba(33, 65, 87);
	}
`;

export const NavList = styled.ul`
	display: flex;
	justify-content: space-between;
	position: relative;
	align-items: center;

	@media ${device.tablet} {
		overflow: hidden;
		flex-direction: column;
		width: 100%;
		max-height: ${({ isopen }) => (isopen ? '300px' : '0px')};
		transition: max-height 0.4s ease-in-out;
	}
`;
export const NavItems = styled.div`
	padding: 0 1rem;
	position: relative;
	text-align: center;
	text-decoration: none !important;
	color: #67bc98 !important;
	font-family: serif;
	font-size: 1rem !important;

	&::before {
		content: '';
		position: absolute;
		background: rgb(217, 24, 239) !important;
		height: 0.08em;
		width: 59%;
		transform: scaleX(0);
		bottom: -0.3rem;
		transform-origin: center;
		transition: transform 0.4s ease-in-out;
	}

	&:hover::before {
		transform: scaleX(1.1);
		transform-origin: left right;
	}

	@media ${device.tablet} {
		margin: 0 2rem;
		padding: 0 1rem !important;
		font-size: 0.7rem !important;
	}
	@media ${device.mobileL} {
		margin: 0 2rem;
		padding: 0 1rem !important;
		font-size: 0.7rem !important;
	}
	@media ${device.mobileM} {
		margin: 0 2rem;
		padding: 0 1rem !important;
		font-size: 0.7rem !important;
	}
`;
export const Logo = styled.div`
	display: flex;
	align-items: center;
	& img {
		display: none;
		@media ${device.mobileL} {
			margin: 0 1rem;
			height: 3rem;
			width: 3rem;
			border-radius: 50px;
			display: inline-block !important;
		}
	}
	& h4 {
		font-size: 1.8rem;
		font-weight: bold;
		color: #8ace;
		@media ${device.mobileM} {
			margin: 0.7rem;
		}
	}
	& span {
		font-size: 1.3rem;
		font-weight: 300;
		color: #3bce !important;
	}
	@media ${device.tablet} {
		display: block !important;
		margin: -1.9rem;
		font-size: 1.4rem;
	}
`;
export const Menu = styled.div`
	display: none !important;
	@media ${device.tablet} {
		display: flex !important;
	}
	@media ${device.mobileS} {
		margin: -1.9rem;
		font-size: 1.4rem;
	}
`;
