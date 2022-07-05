import React, { useState, useReducer, useRef } from 'react';
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
import { validemail, validname, validtelno } from './validate/regex';
import './validate/Contact.css';
import Modal from './Modal';
import emailjs from '@emailjs/browser';
import { Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion/dist/framer-motion';
import avatar from '../../assets/avatar.png';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

export default function Contact(props) {
	const [user, setUser] = useState({
		name: '',
		email: '',
		subject: '',
		other: '',
		message: '',
		fullname: '',
		other_position: '',
		position: '',
		company_name: '',
		company_location: '',
		telephone_address: '01111111111',
		work_no: '01111111111',
	});
	const formref = useRef(null);
	const [isother, setOther] = useState(false);
	const [isposition, setPosition] = useState(false);
	const [ismodal, setModal] = useState(false);
	const [issuccess, setSuccess] = useState(false);
	const [isfailure, setEmailNotSent] = useState(false);
	const [modalcontent, setModalcontent] = useState('');
	const [modalcont, setModalcont] = useState('');
	const [more, setMore] = useState('');
	const [ismoreinfo, setMoreInfo] = useState(false);
	const [isrequired, setRequired] = useState(false);
	const [isbutton, setButton] = useState(false);

	// emailjs functionality
	function sendemail(e) {
		e.preventDefault();

		console.log(user.other);
		if (
			(user.name && user.email) ||
			user.subject ||
			(user.other && user.message && user.fullname) ||
			user.position ||
			(user.other_position &&
				user.company_name &&
				(user.company_location || user.telephone_address) &&
				user.work_no)
		) {
			if (!validemail.test(user.email)) {
				setModal(true);
				setModalcont('Invalid Email');
			}
			if (!validname.test(user.name)) {
				setModal(true);
				setModalcont('Invalid name');
			}
			if (
				!validtelno.test(user.telephone_address) ||
				!validtelno.test(user.work_no)
			) {
				setModal(true);
				setModalcont('Invalid Phone No');
			}
			!ismoreinfo
				? emailjs
						.sendForm(
							'service_l3si9yj',
							'template_jw0vovd',
							formref.current,
							'difPipOJ5wlM6J2E6',
						)
						.then(
							(result) => {
								console.log(result.text);
								setModal(true);
								setButton(true);
								setModalcontent('Email Sent Successfully');
								setSuccess(true);
							},
							(error) => {
								setEmailNotSent(true);
								setModalcontent('Email not sent');
								console.log(error);
							},
						)
				: emailjs
						.sendForm(
							'service_l3si9yj',
							'template_zqmxz7u',
							formref.current,
							'difPipOJ5wlM6J2E6',
						)
						.then(
							(result) => {
								console.log(result.text);
								setModal(true);
								setMoreInfo(false);
								setModalcontent('Email Sent Successfully');
								setSuccess(true);
								setButton(false);
								setUser({
									name: '',
									email: '',
									subject: '',
									other: '',
									message: '',
									fullname: '',
									other_position: '',
									position: '',
									company_name: '',
									company_location: '',
									telephone_address: '01111111111',
									work_no: '01111111111',
								});
							},
							(error) => {
								setEmailNotSent(true);
								setModalcontent('Email not sent');
								console.log(error);
							},
						);
		} else {
			setModal(true);
			setModalcont('No empty inputs allowed');
		}
	}

	const handlechange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		if (e.target.value.length > 0) {
			setRequired(true);
		}

		setUser({ ...user, [name]: value });
	};

	const closeModal = () => {
		setModal(false);
	};

	return (
		<>
			{ismodal && (
				<Modal modalcontent={modalcontent} closeModal={closeModal} />
			)}
			<motion.div
				initial={{ x: [-100, -50, -20, 0, 10, 10, 0], opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					transition: { duration: 2.7 },
				}}
				exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
			>
				<Wrapper className="container" opennav={props.opennav}>
					<h5 style={{ color: 'maroon' }}>Contact Info</h5>
					<Left__contact>
						<Leftcontact__List>
							<Image></Image>
							<ul>
								<img src={avatar} alt="" />
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
							<Form ref={formref}>
								<div className="d-flex justify-content-between align-items-center">
									<h5>
										{!ismoreinfo ? 'Contact Us!!' : 'More Info'}
									</h5>

									<IconButton>
										{ismoreinfo ? (
											<ArrowBackIos className="active_button" />
										) : (
											<ArrowForwardIos className="active_button" />
										)}
									</IconButton>
								</div>
								{!ismoreinfo ? (
									<motion.div>
										<div className="d-flex">
											<input
												value={user.name}
												onChange={handlechange}
												type="text"
												name="name"
												placeholder="Enter your First Name"
											/>{' '}
											{/*<span>{isrequired ? '*' : ''}</span>*/}
										</div>
										<div className="d-flex">
											<input
												value={user.email}
												onChange={handlechange}
												type="email"
												name="email"
												placeholder="Enter your Email"
											/>{' '}
											{/*<span>{isrequired ? '*' : ''}</span>*/}
										</div>
										<div className="d-flex">
											{!isother && (
												<select
													name="subject"
													value={user.subject}
													onChange={handlechange}
												>
													<option value="IT/Webapp Expertise">
														IT/Webapp Expertise
													</option>
													<option value="Music Classes">
														Music Classes
													</option>
													<option value="Music Entertainment">
														Music Entertainment
													</option>
													<option value="Production">
														Production
													</option>
													<option
														onClick={() => setOther(!isother)}
														value="Other"
													>
														Other...
													</option>
												</select>
											)}{' '}
											{/*<span>{isrequired ? '*' : ''}</span>*/}
										</div>
										<div className="d-flex">
											{isother && (
												<input
													value={user.other}
													onChange={handlechange}
													type="text"
													name="other"
													placeholder="description"
													id=""
												/>
											)}
										</div>
										<div className="d-flex">
											<textarea
												value={user.message}
												onChange={handlechange}
												name="message"
												id=""
												resize="noresize"
												cols="40"
												rows="6"
												wrap="hard"
												placeholder="Message"
											>
												Other...
											</textarea>{' '}
											{/*<span>{isrequired ? '*' : ''}</span>*/}
										</div>
										{ismodal && (
											<Modal
												modalcont={modalcont}
												closeModal={closeModal}
											/>
										)}
										<Button
											className={
												!isbutton
													? 'btn btn-primary mt-3 text-info py-2'
													: 'd-none'
											}
											type="submit"
											variant="outlined"
											onClick={sendemail}
										>
											Send Email
										</Button>
									</motion.div>
								) : (
									<motion.div className="other_form">
										<input
											type="text"
											value={user.fullname}
											onChange={handlechange}
											name="fullname"
											placeholder="FullName"
										/>{' '}
										{/*<span>{isrequired ? '*' : ''}</span>*/}
										{!isposition && (
											<select
												name="position"
												value={user.position}
												onChange={handlechange}
											>
												<option value="CEO">CEO</option>
												<option value="COO">COO</option>
												<option value="Manager">Manager</option>

												<option
													onClick={() => setPosition(!isposition)}
													value="Other"
												>
													Other...
												</option>
											</select>
										)}
										{isposition && (
											<input
												value={user.other_position}
												onChange={handlechange}
												type="text"
												name="other_position"
												placeholder="Your Role in this company"
												id=""
											/>
										)}
										<input
											type="text"
											value={user.company_name}
											onChange={handlechange}
											name="company_name"
											placeholder="Company Name"
										/>{' '}
										{/*<span>{isrequired ? '*' : ''}</span>*/}
										<input
											type="text"
											value={user.company_location}
											onChange={handlechange}
											name="company_location"
											placeholder="Company Location"
										/>{' '}
										{/*<span>{isrequired ? '*' : ''}</span>*/}
										<input
											type="text"
											value={user.telephone_address}
											onChange={handlechange}
											name="telephone_address"
											placeholder="Tel No"
										/>
										<input
											type="text"
											value={user.work_no}
											onChange={handlechange}
											name="work_no"
											placeholder="Work No"
										/>{' '}
										{/*<span>{isrequired ? '*' : ''}</span>*/}
										<Button
											className="btn btn-primary mt-3 text-info py-2"
											type="submit"
											variant="outlined"
											onClick={sendemail}
										>
											Add Data
										</Button>
									</motion.div>
								)}
							</Form>
						</Form__div>
					</Right__contact>
				</Wrapper>
			</motion.div>
		</>
	);
}
