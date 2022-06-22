import React, { useEffect } from 'react';
import {
	Wrapper,
	Info__div,
	Static,
	Dynamic,
	Image,
	DynamicList,
	Box,
	Header,
	Image__div,
	H3,
} from '../../css/HomeWrapper';
import {
	AnimatePresence,
	motion,
} from 'framer-motion/dist/framer-motion';

import { Typography } from '@mui/material';
import proflogo from '../../assets/proflogo.png';
const mystyle = {
	color: 'yellowgreen',
	fontFamily: 'roboto',
	fontSize: '1.21rem',
	padding: '1rem',
};
export default function Home(props) {
	return (
		<Wrapper className="container-fluid" opennav={props.opennav}>
			<Header>MyBio</Header>
			<motion.div
				initial={{ x: '-100%', opacity: 0 }}
				animate={{ x: '0%', opacity: 1, transition: { duration: 2 } }}
				exit={{ y: '100%', transition: { duration: 0.8 } }}
			>
				<Info__div>
					<Box>
						<div>
							<div className="d-flex align-items-center">
								<Static>I'm</Static>
								<Dynamic>
									<DynamicList>
										<span>Zacharia Muigai...</span>
									</DynamicList>
									<DynamicList>
										<span> Coder</span>
									</DynamicList>
									<DynamicList>
										<span>Developer</span>{' '}
									</DynamicList>
									<DynamicList>
										<span>Music Director</span>
									</DynamicList>
								</Dynamic>
							</div>
							<Typography style={mystyle} variant="h5">
								A React Developer and also a Music Instructor, Teacher
								and Director.Currently leading a music company and
								tech company.
							</Typography>
							<div className="btn btn-primary">Download CV</div>
						</div>
						<Image>
							{' '}
							<img src={proflogo} alt="Profile Picture" />
						</Image>
					</Box>
				</Info__div>
			</motion.div>
		</Wrapper>
	);
}
