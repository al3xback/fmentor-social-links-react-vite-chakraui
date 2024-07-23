import { extendTheme, ChakraProvider, Flex } from '@chakra-ui/react';

import Header from './components/Header.jsx';
import Profile from './components/Profile.jsx';
import Footer from './components/Footer.jsx';

const brand = {
	fontFamily: `'Inter', sans-serif`,
	colors: {
		green: 'hsl(75, 94%, 57%)',
		greendark: 'hsl(75, 94%, 42%)',
		white: 'hsl(0, 0%, 100%)',
		grey: 'hsl(0, 0%, 20%)',
		darkgrey: 'hsl(0, 0%, 12%)',
		offblack: 'hsl(0, 0%, 8%)',
	},
	lineHeight: 1.4,
};

const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: brand.colors.offblack,
				color: brand.colors.white,
				lineHeight: brand.lineHeight,
			},
		},
	},
	fonts: {
		body: brand.fontFamily,
		heading: brand.fontFamily
	},
	colors: {
		brand: brand.colors,
	},
	components: {
		Link: {
			baseStyle: {
				_hover: {
					textDecoration: 'none',
				},
			},
		},
	},
});

function App() {
	return (
		<ChakraProvider resetCSS={false} theme={theme}>
			<Header />
			<Flex as="main" flex="auto">
				<Flex flex="auto" justify="center" align="center" p="0 2.4rem">
					<Profile />
				</Flex>
			</Flex>
			<Footer />
		</ChakraProvider>
	);
}

export default App;
