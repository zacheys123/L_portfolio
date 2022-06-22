import React, { useEffect } from 'react';
import { Alert } from '@mui/material';
import { motion } from 'framer-motion/dist/framer-motion';
function Modal({ modalcontent, modalcont, more, closeModal }) {
	useEffect(() => {
		setTimeout(() => {
			closeModal();
		}, 2000);
	}, []);
	return (
		<>
			{modalcontent && (
				<motion.div
					initial={{ y: '-100%', opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: { duration: 0.5 },
					}}
					exit={{
						y: '-100%',
						opacity: 1,
						transition: { duration: 4 },
					}}
				>
					<Alert className="text-info d-flex justify-content-center align-items-center ">
						<h4>{modalcontent}</h4>
					</Alert>
				</motion.div>
			)}
			<motion.p
				initial={{ y: '-100%', opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					transition: { duration: 0.5 },
				}}
				exit={{
					y: 0,
					opacity: 0,
					transition: { duration: 6 },
				}}
				style={{
					color: 'red',
					textAlign: 'center',
					marginTop: '.7rem',
				}}
			>
				{modalcont}
			</motion.p>
			<motion.p
				initial={{ scale: '0.8' }}
				animate={{
					scale: '1',
					transition: { repeat: Infinity },
				}}
				style={{
					color: 'blue',
					textAlign: 'center',
					marginTop: '.7rem',
					fontSize: '.7 !important',
				}}
			>
				{more}
			</motion.p>
		</>
	);
}

export default Modal;
