import React, { useState, useEffect, useReducer } from 'react';
import {
	Wrapper,
	Left_faq,
	Right_faq,
	PersonalWrapper,
	TechWrapper,
	MusicWrapper,
	OtherWrapper,
} from '../../css/Faq';

import { faqs } from './faq/faqs';
import Personal from './faq/Personal';
import Other from './faq/Other';
import Music from './faq/Music';
import Tech from './faq/Tech';
function Faq() {
	const [faq, setFaq] = useState(faqs);
	const [ispersonal, setPersonal] = useState(false);
	const [istech, setTech] = useState(false);
	const [ismusic, setMusic] = useState(false);
	const [isother, setOther] = useState(false);

	useEffect(() => {
		faq &&
			faq.map((fqs) => {
				setFaq(() => fqs);
			});
	}, []);
	return (
		<>
			<Wrapper className="container-fluid ">
				<Left_faq>
					<div>
						<div className="choices">
							<ul>
								<li onClick={() => setPersonal(!ispersonal)}>
									Personal
								</li>
								<li onClick={() => setTech(!istech)}>IT</li>
								<li onClick={() => setMusic(!ismusic)}>Music</li>
								<li onClick={() => setOther(!isother)}>Other</li>
							</ul>
						</div>
					</div>
				</Left_faq>

				<Right_faq
					ispersonal={ispersonal}
					istech={istech}
					ismusic={ismusic}
					isother={isother}
				>
					<div>
						<PersonalWrapper>
							{ispersonal &&
								faq.personal.map((data) => {
									if (Object.keys(data).length > 1)
										return <Personal data={data} />;
								})}
						</PersonalWrapper>
						<TechWrapper>
							{istech &&
								faq.it.map((data) => {
									if (Object.keys(data).length > 1)
										return <Tech data={data} />;
								})}
						</TechWrapper>
						<MusicWrapper>
							{ismusic &&
								faq.music.map((data) => {
									if (Object.keys(data).length > 1)
										return <Music data={data} />;
								})}
						</MusicWrapper>
						<OtherWrapper>
							{isother &&
								faq.other.map((data) => {
									if (Object.keys(data).length > 1)
										return <Other data={data} />;
								})}
						</OtherWrapper>
					</div>
				</Right_faq>
			</Wrapper>
		</>
	);
}

export default Faq;
