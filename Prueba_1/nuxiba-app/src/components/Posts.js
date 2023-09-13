import { useState } from 'react';
import {
    Card,
    CardHeader,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Avatar,
    Flex,
    Text,
} from '@chakra-ui/react';
import './styles/posts.css';
import { useSelector } from 'react-redux';
import CommentsComponent from './CommentsComponent';

export default function Posts() {
    const posts = useSelector((state) => state.currentPosts);
    const currentUser = useSelector((state) => state.currentUser);
    const [comments, setComments] = useState([]);

    /**
     * Retrieves and sets comments for a specific post from an external API.
     *
     * This function sends a GET request to a JSONPlaceholder API endpoint to fetch comments associated with a specific post.
     * The `postId` parameter is used to specify the post for which comments are to be retrieved.
     * The `checkIfOpen` parameter is used to conditionally fetch comments only if it equals 0.
     * Once the comments are retrieved, they are set in the local state using the `setComments` function.
     *
     * @param {number} postId - The ID of the post for which comments are to be fetched.
     * @param {number} checkIfOpen - A conditional flag; if set to 0, comments will be fetched.
     */
    const getComments = (postId, checkIfOpen) => {
        // Check if comments should be fetched based on the 'checkIfOpen' flag
        if (checkIfOpen === 0) {
            // Send a GET request to retrieve comments for the specified post
            fetch(
                `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
            )
                .then((response) => response.json()) // Parse the response JSON
                .then((json) => setComments(json)); // Set the retrieved comments in the local state
        }
    };

    return (
        <div className='PostsContainer'>
            <Heading
                color='white'
                marginBottom='10px'
            >
                Posts
            </Heading>
            {posts?.map((post, index) => {
                return (
                    <Card
                        marginBottom='10px'
                        key={index}
                    >
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex
                                    flex='1'
                                    gap='4'
                                    alignItems='center'
                                    flexWrap='wrap'
                                >
                                    <Avatar name={currentUser.name} />

                                    <Box>
                                        <Heading size='sm'>
                                            {currentUser.name}
                                        </Heading>
                                        <Text>Title: {post?.title}</Text>
                                        <Text>Message: {post?.body}</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>

                        <Accordion
                            allowToggle
                            onChange={(checkClose) => {
                                getComments(post.id, checkClose);
                            }}
                        >
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as='span'
                                            flex='1'
                                            textAlign='left'
                                        >
                                            Abrir Comentarios
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {comments?.map((comment) => {
                                        return (
                                            <CommentsComponent
                                                comment={comment}
                                            />
                                        );
                                    })}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                );
            })}
        </div>
    );
}
