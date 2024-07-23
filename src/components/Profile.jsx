import { Stack, Flex, Heading, Text, Image, Link } from '@chakra-ui/react';

import avatarImg from '../assets/avatar.jpeg';

function SocialLink({ href = '#', children }) {
	return (
		<Flex as="li" direction="column">
			<Link href={href} className="btn btn--primary btn--full" isExternal>
				{children}
			</Link>
		</Flex>
	);
}

export default function Profile() {
	return (
		<Flex
			as="article"
			direction="column"
			align="center"
			gap="2.4rem"
			w="100%"
			maxW="33rem"
			p="2.4rem"
			bgColor="brand.darkgrey"
			m="4rem 0 6rem"
			borderRadius="12px"
			sx={{
				'@media (min-width: 48em)': {
					maxW: '35.4rem',
					p: '3.6rem',
				},
			}}
		>
			<Image
				src={avatarImg}
				alt="Jessica Randall"
				w="8rem"
				borderRadius="50%"
			/>
			<Flex direction="column" gap="0.6rem" textAlign="center">
				<Heading
					fontFamily="inherit"
					fontSize="2.4rem"
					fontWeight="600"
					lineHeight="1.3"
				>
					Jessica Randall
				</Heading>
				<Text fontWeight="700" color="brand.green">
					London, United Kingdom
				</Text>
			</Flex>
			<Text>&Prime;Front-end developer and avid reader.&Prime;</Text>
			<Stack as="ul" alignSelf="stretch" spacing="1.6rem">
				<SocialLink>GitHub</SocialLink>
				<SocialLink>Frontend Mentor</SocialLink>
				<SocialLink>LinkedIn</SocialLink>
				<SocialLink>Twitter</SocialLink>
				<SocialLink>Instagram</SocialLink>
			</Stack>
		</Flex>
	);
}
