import React, { useState, useReducer } from 'react';
import {
	Wrapper,
	Left__contact,
	Leftcontact__List,
	Form,
	Right__contact,
	Form__div,
	Div,
	Image,
} from '../../css/ContactWrapper';
import Modal from './Modal';
import emailjs from '@emailjs/browser';
import { Button } from '@mui/material';
import { motion } from 'framer-motion/dist/framer-motion';
import prof from '../../assets/proflogo.png';
export default function Contact() {
	const [user, setUser] = useState({
		name: '',
		email: '',
		subject: '',
		other: '',
		message: 'Other...',
	});

	const [isother, setOther] = useState(false);
	const [ismodal, setModal] = useState(false);
	const [issuccess, setSuccess] = useState(false);
	const [iserror, setError] = useState(false);
	const [isnotsent, setEmailNotSent] = useState(false);
	const [modalcontent, setModalcontent] = useState(
		'Email sent successfully',
	);
	function sendemail(e) {
		e.preventDefault();
		if (
			user.name &&
			user.email &&
			user.subject &&
			user.other &&
			user.message
		) {
			emailjs
				.sendForm(
					'service_l3si9yj',
					'template_jw0vovd',
					e.target,
					'difPipOJ5wlM6J2E6',
				)
				.then(
					(result) => {
						console.log(result.text);
						setModal(true);
						setModalcontent('Email Sent Successfully');
						setSuccess(true);
					},
					(error) => {
						setEmailNotSent(true);
						setModalcontent('Email not sent');
						console.log(error);
					},
				);
			e.target.reset();
		} else {
			setModalcontent('No empty inputs allowed');
			setError(true);
		}
	}

	const handlechange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUser({ ...user, [name]: value });
	};

	const closeModal = () => {
		setModal(false);
	};
	return (
		<>
			<Modal closeModal={closeModal} modalcontent={modalcontent} />
			<motion.div>
				<Wrapper className="container">
					<Left__contact>
						<Leftcontact__List>
							<Image></Image>
							<ul>
								<img src={prof} alt="" />
								<li>
									<span>Full contact Name:</span>
									<em>Zacharia Muigai</em>
								</li>
								<li>
									<span>Company Name:</span>
									<em> 12keys records/Solutions</em>
								</li>
								<li>
									<span>Tel/Work No:</span>
									<em>0114705820</em>
								</li>
								<li>
									<span>Email:</span>
									<em>12keysjams@gmail.com</em>
								</li>
								<li>
									<span>Postal address</span>
									<em> PO BOX 0010 Nairobi</em>
								</li>
							</ul>
						</Leftcontact__List>
						<hr />
						<span>&copy;Zacheydeveloper 2022</span>
					</Left__contact>
					<Div></Div>
					<Right__contact>
						<Form__div>
							<Form onSubmit={sendemail}>
								<h5>Contact us!!</h5>
								<input
									value={user.name}
									onChange={handlechange}
									type="text"
									name="name"
									placeholder="Enter your Name"
								/>
								<input
									value={user.email}
									onChange={handlechange}
									type="text"
									name="email"
									placeholder="Enter your Email"
								/>
								<select
									name="subject"
									value={user.subject}
									onChange={handlechange}
								>
									<option value="IT/Webapp Expertise">
										IT/Webapp Expertise
									</option>
									<option value="Music Classes" selected>
										Music Classes
									</option>
									<option value="Music Entertainment">
										Music Entertainment
									</option>
									<option value="Production">Production</option>
									<option
										onClick={() => setOther(!isother)}
										value="Other"
									>
										Other...
									</option>
								</select>
								{isother && (
									<input
										value={user.subject}
										onChange={handlechange}
										type="text"
										name="subject"
										placeholder="other"
										id=""
									/>
								)}
								<textarea
									value={user.message}
									onChange={handlechange}
									name="message"
									id=""
									resize="noresize"
									cols="40"
									rows="4"
									wrap="hard"
									placeholder="Message"
								>
									Other...
								</textarea>

								<Button
									variant="outlined"
									className="btn btn-primary mt-3 text-info py-2"
								>
									Send Email
								</Button>
							</Form>
						</Form__div>
					</Right__contact>
				</Wrapper>
			</motion.div>
		</>
	);
}
