import { Flex, Text, Link } from '@chakra-ui/react';

export default function Footer() {
	return (
		<Flex
			as="footer"
			direction="column"
			pos="absolute"
			left="0"
			bottom="0"
			w="100%"
			p="1.2rem 0"
			fontSize="1.2rem"
			textAlign="center"
		>
			<Flex direction="column" p="0 2.4rem">
				<Text>
					Challenge by{' '}
					<Link
						href="https://www.frontendmentor.io?ref=challenge"
						className="btn btn--link"
						isExternal
					>
						Frontend Mentor
					</Link>
					. Coded by{' '}
					<Link
						href="https://github.com/al3xback"
						className="btn btn--link"
						isExternal
					>
						al3xback
					</Link>
					.
				</Text>
			</Flex>
		</Flex>
	);
}
