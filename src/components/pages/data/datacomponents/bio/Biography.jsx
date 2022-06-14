import React from 'react';
import { Bio__info, Biodata, Cardy, Header } from './Bio.style';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Divider,
} from '@mui/material';
import proflogo from '../../../../../assets/proflogo.png';
import './bio.css';
function Biography() {
	return (
		<>
			<Bio__info>
				<Header>About Me</Header>
				<Cardy className="biocard">
					<Card className="biocard">
						<CardMedia
							style={{
								height: '20rem',
								width: '100%',
								objectPosition: 'top center',
								marginTop: '0%',
							}}
							image={proflogo}
						/>
						<CardContent>
							<Typography
								style={{
									color: 'garkgreen',
									fontFamily: 'Monospace',
									fontWeight: 'bold',
								}}
								variant="body1"
							>
								Mr Zacharia Muigai
							</Typography>
							<Typography variant="body1">
								<strong style={{ color: 'brown' }}>
									Founder CEO 12Keys Records/Solutions
								</strong>
							</Typography>
						</CardContent>
					</Card>
				</Cardy>
				<Biodata>
					<Typography>
						<p className="biodata">
							My name is Zacharia Muigai,kenyan citizen born in the
							year 1992 to one happy married couple.I currently have
							four siblings.My Journey began when i was a very small
							man,always felt like i didn't belong since those days
							school was mandatory for many especially for those who
							had the means to attend.I always felt like i was ment to
							do more or something else which i didn't know at the
							time. "Have you ever felt like you are strawling along
							with people who seem like they've got it all figured
							out,while you feel like you have no purpose ??...",that
							was me. To cut the long story short,it finally dawned on
							me when i was half way through highschool that i had
							found this passion of music which hit me so had it was
							the only thing that i could think about.I thank God for
							my parents they did all they could to help me get my
							footing,Foundation and after a 10 years of
							practicing,struggling,sleepless nights and 'stealing'
							knowledge i can say im comfortable with afew instruments
							mainly piano.I make a living out of music by teaching
							,entertaining and production.
						</p>
						<p className="biodata">
							My Journey in IT started four years after high school
							where i attended NIBS COLLEGE and got my diploma in
							IT.In school i always looked forward to classes mainly
							programming ones because i felt i excelled at those
							more.I want to Dedicate my life to acheiving more in IT
							and Music and also have an Impact in our Society.Theres
							alot that we can do as long as we have a picture of what
							is our end product..
						</p>
						<Divider />
						<span>&copy; Zacharia Muigai 2022</span>
					</Typography>
				</Biodata>
			</Bio__info>
			;
		</>
	);
}

export default Biography;
