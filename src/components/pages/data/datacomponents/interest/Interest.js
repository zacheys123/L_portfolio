import React from 'react';
import {
	Grid,
	Card,
	CardContent,
	CardHeader,
	Typography,
} from '@mui/material';
import { Title, Description, IntList } from './interest.style';
function Interest({ data_interest }) {
	const { title, descrption } = data_interest;
	return (
		<IntList>
			<Title>
				{' '}
				<Typography>{title}</Typography>
			</Title>
			<Description>
				{' '}
				<Typography variant="subtitle1"> {descrption}</Typography>
			</Description>
		</IntList>
	);
}

export default Interest;
