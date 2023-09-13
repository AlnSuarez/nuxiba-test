import { Card, CardHeader, Box, Heading, Avatar, Flex, Text } from '@chakra-ui/react';
export default function CommentsComponent({comment}) {
    return (
        <Card>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex
                        flex='1'
                        gap='4'
                        alignItems='center'
                        flexWrap='wrap'
                    >
                        <Avatar name={comment.name} />

                        <Box>
                            <Heading size='sm'>{comment.name}</Heading>
                            <Text>{comment.body}</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
        </Card>
    );
}
