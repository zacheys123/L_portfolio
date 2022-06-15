import styled from 'styled-components';
import { media__queries as device } from '../../../../../css/media__queries';
export const Bio__info = styled.div`
	padding: 1rem;
	font-size: 1.3rem !important;
`;
export const Biodata = styled.div`
	margin-top: 4rem;
`;
export const Cardy = styled.div`
	object-position: top center;
	float: right;
	margin: 1rem;

	@media ${device.tablet} {
		min-height: 5rem;
		max-width: 12rem;
	}
	@media ${device.mobileS} {
		min-height: 5rem;
		max-width: 12rem;
	}
	@media ${device.mobileL} {
		min-height: 5rem;
		max-width: 12rem;
	}
	@media ${device.mobileM} {
		min-height: 5rem;
		max-width: 12rem;
	}
`;
export const Header = styled.div`
	font-family: 'Joan', serif;
	text-align: 'center';
	color: rgba(233, 45, 127, 0.4) !important;
	font-size: 1.6rem;
	font-weight: bold;

	@media ${device.tablet} {
		text-align: center;
	}
	@media ${device.mobileS} {
		text-align: center;
	}
	@media ${device.mobileL} {
		text-align: center;
	}
	@media ${device.mobileM} {
		text-align: center;
	}
`;
