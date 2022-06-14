import styled from 'styled-components';

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
	min-height: 40rem;
`;
export const Left__body = styled.div`
	display: flex;
	min-height: 100%;
	flex: 0.3;
`;

export const Borderdiv = styled.div`
	height: 80%;
	margin: 4rem 1rem 2rem 1rem;
	border: 2px solid inherit;
`;
export const Leftbody__list = styled.div`
	max-width: 80%;
	flex-grow: 1;
	border-right: 2px solid -webkit-linear-gradient(hsl(10, 90%, 93%)
				30%, rgba(225, 123, 123, 0.4));
`;
export const Right__body = styled.div`
	flex: 0.7;
	position: relative;
	border-radius: 1.2rem;
	background: -webkit-linear-gradient(
		hsl(10, 90%, 93%) 30%,
		rgba(225, 123, 123, 0.4)
	);
	min-height: 100%;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 1rem;
	}
	&::-webkit-scrollbar-track {
		background: hsl(23, 45%, 60% /1);
	}
	&::-webkit-scrollbar-thumb {
		background: hsl(223, 45%, 20% /1);
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
	}
`;
