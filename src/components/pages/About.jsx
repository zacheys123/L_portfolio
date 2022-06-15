import React, {
	useReducer,
	useState,
	useRef,
	useEffect,
	createContext,
} from 'react';
import {
	Wrapper,
	Box,
	Icons,
	Div,
	Left__body,
	Right__body,
	BodyWrapper,
	Leftbody__list,
	Borderdiv,
	List,
	Li,
	Items,
} from '../../css/AboutWrapper';
import { Link } from 'react-router-dom';

import {
	YouTube,
	LinkedIn,
	Facebook,
	Instagram,
	GitHub,
} from '@mui/icons-material';
import Data from './data/Data';
import {
	biofunc,
	edfunc,
	projfunc,
	vidfunc,
	expfunc,
	intfunc,
} from './data/datareducer';

import { MoreHoriz, MoreVert } from '@mui/icons-material';
import '../../css/datawrapper.css';
import { IconButton, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion/dist/framer-motion';
import '../app/App.css';
export const dataContext = createContext();
export default function About() {
	// refference definitions
	const isbio = useRef();
	const ised = useRef();
	const isproj = useRef();
	const isvid = useRef();
	const isexp = useRef();
	const isint = useRef();
	const [loading, setLoading] = useState(true);
	const [islist, setList] = useState(false);
	const [pagedata, setPagedata] = useState({});

	// passing props to parent
	const Parentcallback = (pagedata) => {
		setPagedata(pagedata);
	};

	// Actions on Buttons
	const handlebio = () => {
		isbio.current.classList.add('active');
		ised.current.classList.remove('active');
		isproj.current.classList.remove('active');
		isvid.current.classList.remove('active');
		isexp.current.classList.remove('active');
		isint.current.classList.remove('active');
		setLoading(false);
		biofunc(pagedata);
	};
	const handleed = () => {
		isbio.current.classList.remove('active');
		ised.current.classList.add('active');
		isproj.current.classList.remove('active');
		isvid.current.classList.remove('active');
		isexp.current.classList.remove('active');
		isint.current.classList.remove('active');
		setLoading(false);
		edfunc(pagedata);
	};

	const handleproj = () => {
		isbio.current.classList.remove('active');
		ised.current.classList.remove('active');
		isproj.current.classList.add('active');
		isvid.current.classList.remove('active');
		isexp.current.classList.remove('active');
		isint.current.classList.remove('active');
		setLoading(false);
		projfunc(pagedata);
	};
	const handlevid = () => {
		isbio.current.classList.remove('active');
		ised.current.classList.remove('active');
		isproj.current.classList.remove('active');
		isvid.current.classList.add('active');
		isexp.current.classList.remove('active');
		isint.current.classList.remove('active');
		setLoading(false);
		vidfunc(pagedata);
	};
	const handleexp = () => {
		isbio.current.classList.remove('active');
		ised.current.classList.remove('active');
		isproj.current.classList.remove('active');
		isvid.current.classList.remove('active');
		isexp.current.classList.add('active');
		isint.current.classList.remove('active');
		setLoading(false);
		expfunc(pagedata);
	};
	const handleint = () => {
		isbio.current.classList.remove('active');
		ised.current.classList.remove('active');
		isproj.current.classList.remove('active');
		isvid.current.classList.remove('active');
		isexp.current.classList.remove('active');
		isint.current.classList.add('active');
		setLoading(false);
		intfunc(pagedata);
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	return (
		<>
			<motion.div
				initial={{ y: '-100%', opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					transition: { duration: 0.7 },
				}}
				exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
			>
				<Wrapper className="container">
					<Div className="d-flex  justify-content-end mt-2">
						<Box>
							<Icons>
								<IconButton>
									{!islist ? (
										<MoreVert
											onClick={() => {
												setList(!islist);
											}}
										/>
									) : (
										<MoreHoriz
											onClick={() => {
												setList(!islist);
											}}
										/>
									)}
								</IconButton>
							</Icons>
							<Link to="" className="navbio__head">
								<motion.div
									initial={{ scale: 1 }}
									animate={{
										scale: 1.1,
										transition: {
											repeat: Infinity,
											duration: 1,
										},
									}}
								>
									<Button variant="outlined">
										<Typography variant="body1">Hire me!</Typography>{' '}
									</Button>
								</motion.div>
							</Link>

							<IconButton component={Link} to="">
								<Facebook
									className="navbio"
									sx={{
										color: '#4267b2',
										fontSize: '1.7rem ',
									}}
								/>
							</IconButton>

							<IconButton component={Link} to="" className="navbio">
								<LinkedIn
									sx={{
										color: '#0072b1',
										fontSize: '1.7rem ',
									}}
								/>
							</IconButton>

							<IconButton component={Link} to="">
								<GitHub
									className="navbio"
									sx={{
										color: '#333',
										fontSize: '1.7rem ',
									}}
								/>
							</IconButton>

							<IconButton component={Link} to="">
								<Instagram
									className="navbio"
									sx={{
										color:
											'linear-gradient(rgb(81,91,212),rgb(129,52,175),rgb(221,42,123),rgb(254,218,119),rgb(245,133,41))!important',
										fontSize: '1.7rem ',
									}}
								/>
							</IconButton>

							<IconButton component={Link} to="">
								<YouTube
									className="navbio"
									sx={{
										color: 'rgb(229,42,115)',
										fontSize: '1.7rem ',
									}}
								/>
							</IconButton>
						</Box>
					</Div>
					<BodyWrapper>
						{!loading && (
							<Left__body loading={loading}>
								<Borderdiv>
									<motion.div
										initial={{ y: '-1rem' }}
										animate={{ y: '36vh' }}
										transition={{ repeat: Infinity, duration: 3 }}
										style={{
											border: '2px solid lightgreen',
											height: '4rem',
										}}
									></motion.div>
								</Borderdiv>
								{islist && (
									<Leftbody__list islist={islist}>
										<List>
											<Li
												className="active"
												onClick={handlebio}
												ref={isbio}
											>
												Bio
											</Li>
											<li ref={ised} onClick={handleed}>
												Education
											</li>
											<li ref={isproj} onClick={handleproj}>
												Projects
											</li>
											<li ref={isvid} onClick={handlevid}>
												Videos
											</li>
											<li ref={isexp} onClick={handleexp}>
												Experience
											</li>
											<li ref={isint} onClick={handleint}>
												Interests
											</li>
										</List>
									</Leftbody__list>
								)}
							</Left__body>
						)}
						<Right__body>
							<dataContext.Provider
								value={{
									pagedata,
									loading,
								}}
							>
								<Data childcallback={Parentcallback} />
							</dataContext.Provider>
						</Right__body>
					</BodyWrapper>
				</Wrapper>
			</motion.div>
		</>
	);
}
