import React, { useState } from 'react';
import { OtherWrapper } from '../../../css/Faq';
import { Divider, IconButton } from '@mui/material';
import {
	ArrowDropDownCircle,
	ArrowDropUp,
} from '@mui/icons-material/';
import ArrowCircleUpTwoTone from '@mui/icons-material/ArrowCircleUpTwoTone';
import { motion } from 'framer-motion/dist/framer-motion';
function Other({ data }) {
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
								: 'd-flex justify-content-between bg-dark py-3'
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
							{!isdropdown ? (
								<code style={{ color: 'lightblue' }}>{title}</code>
							) : (
								<code style={{ color: 'red' }}>{title}</code>
							)}
						</div>
						<IconButton
							onClick={() => {
								setDropdown(!isdropdown);
							}}
						></IconButton>
					</div>
				</li>
			</ol>
		</>
	);
}

export default Other;
