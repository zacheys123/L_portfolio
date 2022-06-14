import styled from 'styled-components';
export const Wrapper = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: hidden;
`;
export const Bio = styled.div`
	background: lightgreen;
	width: 100%;
	min-height: 35rem;
	display: ${(props) => (props.loading ? 'none' : 'block')};
	z-index: 1;
`;
export const Education = styled.div`
	background: blue;
	width: 100%;
	min-height: 100%;
	transform: scale(0);
	display: none;
`;
export const Projects = styled.div`
	background: green;
	width: 100%;
	min-height: 100%;
	transform: scale(0);
	display: none;
`;
export const Videos = styled.div`
	background: purple;
	width: 100%;
	transform: scale(0);
	display: none;
`;
export const Experience = styled.div`
	background: indigo;
	width: 100%;
	transform: scale(0);
	min-height: 35rem;
	display: none;
`;
export const Interests = styled.div`
	transform: scale(0);
	width: 100%;
	padding: 1rem;

	&::-webkit-scrollbar {
		width: 1rem;
	}
	&::-webkit-scrollbar-track {
		background: hsl(23, 45%, 60% /1);
	}
	&::-webkit-scrollbar-thumb {
		background: hsl(223, 45%, 20% /1);
	}
	display: none;
`;
// each page styling
