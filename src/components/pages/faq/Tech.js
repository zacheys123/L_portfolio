import React, { useState } from 'react';
import { TechWrapper } from '../../../css/Faq';
import { Divider, IconButton } from '@mui/material';
import {
	ArrowDropDownCircle,
	ArrowDropUp,
} from '@mui/icons-material/';
import ArrowCircleUpTwoTone from '@mui/icons-material/ArrowCircleUpTwoTone';
import { motion } from 'framer-motion/dist/framer-motion';
function Tech({ data }) {
	const [isdropdown, setDropdown] = useState(false);
	const { id, title, answer } = data;
	return (
		<>
			<ol>
				<li>
					<div
						style={{ borderRadius: '20px' }}
						className={
							isdropdown
								? 'd-flex justify-content-between '
								: 'd-flex justify-content-between bg-light py-3'
						}
					>
						<div className="px-4">
							<span
								style={{
									background: 'violet',
									borderRadius: '50px',
									padding: '.4rem',
								}}
							>
								{id}
							</span>
							<code>{title}</code>
						</div>
						<IconButton
							onClick={() => {
								setDropdown(!isdropdown);
							}}
						>
							{!isdropdown ? (
								<ArrowDropDownCircle
									sx={{
										fontSize: '3rem!important',
										marginRight: ' 2.5rem !important',
										color: 'grey',
									}}
								/>
							) : (
								<ArrowCircleUpTwoTone
									sx={{
										fontSize: '3rem!important',
										marginRight: ' 2.5rem !important',
										color: 'green',
									}}
								/>
							)}
						</IconButton>
					</div>
					{isdropdown && (
						<motion.p
							initial={{ y: '-100%', scale: 0 }}
							animate={{
								y: 0,
								scale: 1,
								transition: { duration: 0.6 },
							}}
							exit={{
								y: 0,
								opacity: 1,
								transition: { duration: 0.6 },
							}}
						>
							{answer}
						</motion.p>
					)}
				</li>
			</ol>
		</>
	);
}

export default Tech;
