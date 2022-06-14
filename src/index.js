import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Global = createGlobalStyle`
body{
	font-family: 'Dosis', sans-serif;

    font-family: 'Hubballi', cursive;

    font-family: 'Joan', serif;

    font-family: 'Josefin Sans', sans-serif;

    font-family: 'Montserrat', sans-serif;
	font-family: 'Titillium Web', sans-serif;
}
li{
font-family: 'Montserrat', sans-serif;
}
`;
// create a theme for the data page
const theme = createTheme({
	breakpoints: {
		xs: '375px',
		sm: '425px',
		md: '768px',
		l: '1024px',
		xl: '1440px',
		desk: '2560px',
	},
	pallete: {
		primary: {
			light: '#e3f2fd',
			main: '#90caf9',
		},
	},
});
root.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider theme={theme}>
				<Global />
				<App />
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
);
