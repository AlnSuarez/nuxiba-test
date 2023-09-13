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
    Button,
    Spacer
} from '@chakra-ui/react';
import './styles/posts.css';
import { useSelector } from 'react-redux';
import CommentsComponent from './CommentsComponent';
import CreateTask from './CreateTask';

export default function Todos() {
    const todos = useSelector((state) => state.currentTodos);
    const currentUser = useSelector((state) => state.currentUser);
    const [openDrawer , setOpenDrawer] = useState(false)

    const handleCloseDrawer = () =>{
        setOpenDrawer(false)
    }

    return (
        <div className='PostsContainer'>
            <Flex>
                <Heading
                    color='white'
                    marginBottom='10px'
                    width='25%'
                >
                    Todos
                </Heading>
                <Spacer />
                <Button colorScheme='green' onClick={()=>{setOpenDrawer(true)}}>Nueva tarea</Button>
            </Flex>

            
            {todos?.map((todo, index) => {
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
                                        <Text>Title: {todo?.title}</Text>
                                        <Text>Completed: {todo?.completed ? "Realizado": "No Realizado"}</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>

                    </Card>
                );
            })}
            <CreateTask handleCloseDrawer={handleCloseDrawer} isOpen={openDrawer}/>
        </div>
    );
}
