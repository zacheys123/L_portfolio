const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px',
	desktopL: '3000px',
};

export const media__queries = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopL: `(max-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktopL})`,
};

// const height = {
// 	mobileS: '320px',
// 	mobileM: '812px',
// 	mobileL: '926px',
// 	tablet: '1024px',
// 	ipad: '1080px',
// 	laptop: '950px',
// 	laptopL: '480px',
// 	desktop: '2560px',
// 	desktopL: '3000px',
// };

// export const media__queries = {
// 	mobileS: `(max-width: ${size.mobileS}) (min-height: ${height.mobileS}) `,
// 	mobileM: `(max-width: ${size.mobileM}) (min-height: ${height.mobileM})`,
// 	mobileL: `(max-width: ${size.mobileL}) (min-height: ${height.mobileL})`,
// 	tablet: `(max-width: ${size.tablet}) (min-height: ${height.tablet})`,
// 	laptop: `(max-width: ${size.laptop}) (min-height: ${height.laptop})`,
// 	laptopL: `(max-width: ${size.laptopL}) (min-height: ${height.laptopL})`,
// 	desktop: `(min-width: ${size.desktop}) (min-height: ${height.desktop})`,
// 	desktopL: `(min-width: ${size.desktopL}) (min-height: ${height.desktopL})`,
// };
