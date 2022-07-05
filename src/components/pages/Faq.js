import React, { useState, useEffect, useRef } from 'react';
import {
	Wrapper,
	Left_faq,
	Right_faq,
	PersonalWrapper,
	TechWrapper,
	MusicWrapper,
	OtherWrapper,
} from '../../css/Faq';
import { motion } from 'framer-motion/dist/framer-motion';
import { faqs } from './faq/faqs';
import Personal from './faq/Personal';
import Other from './faq/Other';
import Music from './faq/Music';
import Tech from './faq/Tech';
import './faq/faq.css';

function Faq() {
	const [faq, setFaq] = useState(faqs);
	const [loading, setLoading] = useState(true);
	const personalref = useRef(null);
	const techref = useRef(null);
	const musicref = useRef(null);
	const otherref = useRef(null);
	const mainref = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => {
			clearTimeout();
		};
	}, []);
	const personal = () => {
		personalref.current.classList.add('active_page');
		techref.current.classList.add('remove');
		techref.current.classList.remove('active_page');
		musicref.current.classList.add('remove');
		musicref.current.classList.remove('active_page');
		otherref.current.classList.add('remove');
		otherref.current.classList.remove('active_page');
		setLoading(false);
	};
	const tech = () => {
		techref.current.classList.add('active_page');
		personalref.current.classList.add('remove');
		personalref.current.classList.remove('active_page');
		musicref.current.classList.add('remove');
		musicref.current.classList.remove('active_page');
		otherref.current.classList.add('remove');
		otherref.current.classList.remove('active_page');
		setLoading(false);
	};
	const music = () => {
		musicref.current.classList.add('active_page');
		techref.current.classList.add('remove');
		techref.current.classList.remove('active_page');
		personalref.current.classList.add('remove');
		personalref.current.classList.remove('active_page');
		otherref.current.classList.add('remove');
		otherref.current.classList.remove('active_page');
		setLoading(false);
	};
	const other = () => {
		otherref.current.classList.add('active_page');
		techref.current.classList.add('remove');
		techref.current.classList.remove('active_page');
		musicref.current.classList.add('remove');
		musicref.current.classList.remove('active_page');
		personalref.current.classList.add('remove');
		personalref.current.classList.remove('active_page');
		setLoading(false);
	};

	return (
		<>
			<Wrapper className="container-fluid ">
				<Left_faq>
					<div>
						<div className="choices">
							<ul>
								<li onClick={personal}>Personal</li>
								<li onClick={tech}>IT</li>
								<li onClick={music}>Music</li>
								<li onClick={other}>Other</li>
							</ul>
						</div>
					</div>
				</Left_faq>

				<Right_faq ref={mainref}>
					<div>
						<PersonalWrapper
							ref={personalref || ''}
							loading={loading}
						>
							{faq &&
								faq.map((firstdata) => {
									return firstdata.personal.map((data) => {
										if (Object.keys(data).length > 1)
											return <Personal data={data} />;
									});
								})}
						</PersonalWrapper>
						<TechWrapper ref={techref || ''} loading={loading}>
							{faq &&
								faq.map((firstdata) => {
									return firstdata.it.map((data) => {
										if (Object.keys(data).length > 1)
											return <Tech data={data} />;
									});
								})}
						</TechWrapper>
						<MusicWrapper ref={musicref || ''} loading={loading}>
							{faq &&
								faq.map((firstdata) => {
									return firstdata.music.map((data) => {
										if (Object.keys(data).length > 1)
											return <Music data={data} />;
									});
								})}
						</MusicWrapper>
						<OtherWrapper ref={otherref || ''} loading={loading}>
							{faq &&
								faq.map((firstdata) => {
									return firstdata.other.map((data) => {
										if (Object.keys(data).length > 1)
											return <Other data={data} />;
									});
								})}
						</OtherWrapper>
					</div>
				</Right_faq>
			</Wrapper>
		</>
	);
}

export default Faq;
