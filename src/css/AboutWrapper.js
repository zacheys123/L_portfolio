import styled from 'styled-components';
import { media__queries as device } from './media__queries';
export const Wrapper = styled.div`
	background: linear-gradient(
		hsl(110, 40%, 0%) 0%,
		rgba(25, 123, 123, 0.4),
		hsl(210, 90%, 3%) 30%
	);
	min-height: 88vh;
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
`;
export const Header = styled.div`
	font-family: 'Joan', serif;
	text-align: 'center';
	color: rgba(233, 45, 127, 0.4) !important;
	font-size: 1.6rem;
	font-weight: bold;
`;

export const Div = styled.div`
	background: linear-gradient(
		hsl(10, 90%, 93%) 30%,
		rgba(225, 123, 123, 0.4)
	);
	width: 100%;
`;
export const BodyWrapper = styled.div`
	display: flex;
	margin-top: 7rem;
	min-height: 35rem;
`;
export const Left__body = styled.div`
	display: flex;
	min-height: 100%;
	flex: 0.3;

	@media ${device.tablet} {
		flex: 0;
	}
	@media ${device.mobileS} {
		flex: 0;
	}

	@media ${device.mobileM} {
		flex: 0;
	}
`;

export const Borderdiv = styled.div`
	height: 80%;
	margin: 4rem 1rem 2rem 1rem;
	border: 1px solid inherit;

	@media ${device.tablet} {
		display: none;
	}
	@media ${device.mobileS} {
		display: none;
	}
	@media ${device.mobileM} {
		display: none;
	}
`;
export const Leftbody__list = styled.div`
	max-width: 80%;
	flex-grow: 1;
	border-right: 2px solid -webkit-linear-gradient(hsl(10, 90%, 93%)
				30%, rgba(225, 123, 123, 0.4));

	@media ${device.tablet} {
		display: none;
		display: flex !important;
		z-index: 1;
		margin-top: -7rem;
		opacity: 0.8;
		background-color: black;
		position: absolute;
	}
	@media ${device.mobileS} {
		display: none;
		display: none;
		display: flex !important;
		z-index: 1;
		margin-top: -7rem;
		opacity: 0.8;
		background-color: black;
		position: absolute;
	}
	@media ${device.mobileM} {
		display: none;
		display: none;
		display: flex !important;
		z-index: 1;
		margin-top: -7rem;
		opacity: 0.8;
		background-color: black;
		position: absolute;
	}
`;
export const Right__body = styled.div`
	flex: 0.7;
	position: relative;
	background: -webkit-linear-gradient(
		hsl(10, 90%, 93%) 30%,
		rgba(225, 123, 123, 0.4)
	);
	min-height: 100%;
	overflow-y: auto;
	@media ${device.tablet} {
		flex: 1;
		margin-top: -5rem;
	}
	@media ${device.mobileL} {
		flex: 1;
		margin-top: -7rem;
	}
	@media ${device.mobileS} {
		flex: 1;
		margin-top: -7rem;
	}
	@media ${device.mobileM} {
		flex: 1;
		margin-top: -7rem;
	}
`;
export const List = styled.ul`
	margin-top: 4rem;
	max-width: 60%;

	& li {
		padding: 0.1rem;
		padding-left: 0.9rem;
		list-style: none;
		width: 100%;
		font-size: 1.4rem;
		margin-bottom: 2rem;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
			serif, sans-serif;
		cursor: pointer;
		color: violet;
		font-weight: bold;

		@media ${device.tablet} {
			font-size: 1rem !important;
		}
		@media ${device.mobileS} {
		}
		@media ${device.mobileM} {
		}
	}
`;
export const Icons = styled.div`
	margin-right: 4rem;
	font-size: 1.4rem;
	background: grey;
	border-radius: 50px;
	height: 38px !important;
	opacity: 0.7;
	display: none;
	@media ${device.tablet} {
		display: block;
		margin-right: 4rem;
	}
	@media ${device.mobileS} {
		display: block;
	}
	@media ${device.mobileM} {
		display: block;
	}
	@media ${device.mobileL} {
		display: block;
	}
`;
export const Li = styled.li`
	@media ${device.tablet} {
		display: none;
	}
	@media ${device.mobileS} {
		display: none;
	}
	@media ${device.mobileM} {
		display: none;
	}
	@media ${device.mobileL} {
		display: none;
	}
`;
