import React, {
	useContext,
	useRef,
	useEffect,
	useState,
} from 'react';
import {
	Bio,
	Education,
	Projects,
	Videos,
	Experience,
	Interests,
	Wrapper,
} from '../../../css/DataWrapper';
import { interests } from './interestdata';
import { motion } from 'framer-motion/dist/framer-motion';
import '../../../css/datawrapper.css';
import { dataContext } from '../About';
import { Grid } from '@mui/material';
import Interest from './datacomponents/interest/Interest';
import Biography from './datacomponents/bio/Biography';

function Data(props) {
	const bioref = useRef();
	const edref = useRef();
	const projref = useRef();
	const vidref = useRef();
	const expref = useRef();
	const intref = useRef();
	const initialref = {
		bioref,
		edref,
		projref,
		vidref,
		expref,
		intref,
	};
	const [interest, setInterest] = useState(interests);
	const { pagedata, loading } = useContext(dataContext);
	useEffect(() => {
		props.childcallback(initialref);
	}, []);

	return (
		<Wrapper>
			{loading && (
				<div className="loading">
					<motion.div
						initial={{ x: '0rem' }}
						animate={{ x: '10vw' }}
						transition={{ repeat: Infinity, duration: 0.31 }}
						style={{
							width: '11%',
							border: '3px solid green',
							height: '100%',
						}}
					></motion.div>
				</div>
			)}

			<motion.div
				initial={{ width: 0, opacity: 0 }}
				animate={{
					width: '100%',
					opacity: 1,
					transition: { duration: 0.9 },
				}}
				exit={{ width: '100%', transition: { duration: 0.8 } }}
				style={{ fontFamily: 'joan', fontWeight: 'bold !important' }}
			>
				<Bio ref={bioref || ''} loading={loading}>
					<Biography />
				</Bio>
			</motion.div>
			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				animate={{
					scale: 1,
					opacity: 1,
					transition: { duration: 0.9 },
				}}
				exit={{ scale: 1, transition: { duration: 0.8 } }}
				style={{ fontFamily: 'joan', fontWeight: 'bold !important' }}
			>
				{' '}
				<Education ref={edref || ''}>
					<h1>Hello Education</h1>
				</Education>{' '}
			</motion.div>

			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				animate={{
					scale: 1,
					opacity: 1,
					transition: { duration: 0.9 },
				}}
				exit={{ scale: 1, transition: { duration: 0.8 } }}
				style={{ fontFamily: 'joan', fontWeight: 'bold !important' }}
			>
				{' '}
				<Projects ref={projref || ''}>
					<h1>Hello Projects</h1>
				</Projects>
			</motion.div>

			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				animate={{
					scale: 1,
					opacity: 1,
					transition: { duration: 0.9 },
				}}
				exit={{ scale: 1, transition: { duration: 0.8 } }}
				style={{ fontFamily: 'joan', fontWeight: 'bold !important' }}
			>
				<Videos ref={vidref || ''}>
					<h1>Hello Videos</h1>
				</Videos>
			</motion.div>

			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				animate={{
					scale: 1,
					opacity: 1,
					transition: { duration: 0.9 },
				}}
				exit={{ scale: 1, transition: { duration: 0.8 } }}
				style={{ fontFamily: 'joan', fontWeight: 'bold !important' }}
			>
				<Experience ref={expref || ''}>
					<h1>Hello Expereince</h1>
				</Experience>
			</motion.div>

			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				animate={{
					scale: 1,
					opacity: 1,
					transition: { duration: 0.9 },
				}}
				exit={{ scale: 1, transition: { duration: 0.8 } }}
				style={{ fontFamily: 'joan', fontWeight: 'bold !important' }}
			>
				<Interests ref={intref || ''}>
					<ul className="d-flex flex-wrap">
						{interest &&
							interest.map((data_interest) => {
								return (
									<Interest
										key={data_interest.id}
										data_interest={data_interest}
									/>
								);
							})}
					</ul>
				</Interests>
			</motion.div>
		</Wrapper>
	);
}

export default Data;
