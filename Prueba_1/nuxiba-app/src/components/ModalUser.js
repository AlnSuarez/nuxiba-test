import { useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Avatar,
    Text,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setPostUser, setTaskUser } from '../actions/users';
import { useNavigate } from 'react-router-dom';

export default function ModalUser({ isOpen, onClose, user }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /**
     * Retrieves and sets user-specific posts from an external API.
     *
     * This function sends a GET request to a JSONPlaceholder API endpoint to fetch posts associated with a specific user.
     * Once the posts are retrieved, they are set in the application state using the provided `setPostUser` dispatch function.
     *
     * @param {number} userId - The ID of the user whose posts are to be fetched.
     */
    const getUserPosts = (userId) => {
        // Send a GET request to retrieve user-specific posts
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => response.json()) // Parse the response JSON
            .then((json) => {
                // Set the fetched posts in the application state
                dispatch(setPostUser(json));
            });
    };

    /**
     * Retrieves and sets user-specific to-do tasks from an external API.
     *
     * This function sends a GET request to a JSONPlaceholder API endpoint to fetch to-do tasks associated with a specific user.
     * Once the to-do tasks are retrieved, they are reversed and set in the application state using the provided `setTaskUser` dispatch function.
     *
     * @param {number} userId - The ID of the user whose to-do tasks are to be fetched.
     */
    const getUserTodos = (userId) => {
        // Send a GET request to retrieve user-specific to-do tasks
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
            .then((response) => response.json()) // Parse the response JSON
            .then((json) => {
                // Reverse the order of the fetched tasks and set them in the application state
                dispatch(setTaskUser(json.reverse()));
            });
    };

    const goToPosts = () => {
        navigate('/userPosts');
    };
    const goToTodos = () => {
        navigate('/userTodos');
    };

    useEffect(() => {
        if (isOpen) {
            getUserPosts(user.id);
            getUserTodos(user.id);
            dispatch(setCurrentUser(user));
        }
    }, [user, isOpen]);

    return (
        <>
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Avatar name={user?.name} />
                        <Text
                            padding='5px'
                            marginTop='10px'
                        >
                            {user?.name}
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text padding='5px'>Username: {user?.username}</Text>
                        <Text padding='5px'>Email: {user?.email}</Text>
                        <Text padding='5px'>Phone: {user?.phone}</Text>
                        <Text padding='5px'>Website: {user?.website}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme='yellow'
                            marginRight='10px'
                            onClick={() => {
                                goToPosts();
                            }}
                        >
                            Posts
                        </Button>
                        <Button
                            colorScheme='orange'
                            marginRight='10px'
                            onClick={() => {
                                goToTodos();
                            }}
                        >
                            ToDo's
                        </Button>

                        <Button
                            onClick={onClose}
                            colorScheme='red'
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
