import React, { useEffect } from 'react';
import { Alert } from '@mui/material';
function Modal({ modalcontent, closeModal }) {
	useEffect(() => {
		setTimeout(() => {
			closeModal();
		}, 2000);
	});
	return (
		<>
			{modalcontent && (
				<Alert className="text-center">{modalcontent}</Alert>
			)}
		</>
	);
}

export default Modal;
