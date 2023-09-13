import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Checkbox,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setTaskUser } from '../actions/users';

export default function CreateTask({ handleCloseDrawer, isOpen }) {
    const currentUser = useSelector((state) => state.currentUser);
    const currentTodos = useSelector((state) => state.currentTodos);
    const dispatch = useDispatch();
    const [check, setCheck] = useState(null);
    const [title, setTitle] = useState(null);

    /**
     * Creates a new task and adds it to the list of user tasks.
     *
     * This function sends a POST request to a JSONPlaceholder API to create a new task with the specified title, completion status, and user ID.
     * Once the task is created, it is added to the list of the user's tasks in the application state.
     */
    const handleCreateTask = () => {
        // Send a POST request to create a new task
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: title, // The title of the new task
                completed: check, // The completion status of the new task
                userId: currentUser.id, // The user ID associated with the task
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json()) // Parse the response JSON
            .then((json) => {
                // Add the newly created task to the list of user tasks in the application state
                dispatch(setTaskUser([json, ...currentTodos]));
            });
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={handleCloseDrawer}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Nueva Tarea</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form>
                            <Input
                                placeholder='Title'
                                marginBottom='10px'
                                required
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                            />
                            <Checkbox
                                defaultChecked
                                required
                                onChange={(e) => {
                                    setCheck(e.target.checked);
                                }}
                            >
                                Checked
                            </Checkbox>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            mr={3}
                            onClick={handleCloseDrawer}
                        >
                            Close
                        </Button>
                        <Button
                            colorScheme='green'
                            type='submit'
                            onClick={() => {
                                handleCloseDrawer();
                                handleCreateTask();
                            }}
                        >
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
