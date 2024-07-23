import { Box, Heading } from '@chakra-ui/react';

export default function Header() {
	return (
		<Box as="header">
			<Heading
				as="h1"
				pos="absolute"
				w="1px"
				h="1px"
				p="0"
				m="-1px"
				border="0"
				overflow="hidden"
				sx={{
					clip: 'rect(0, 0, 0, 0)',
				}}
			>
				Social links profile
			</Heading>
		</Box>
	);
}
