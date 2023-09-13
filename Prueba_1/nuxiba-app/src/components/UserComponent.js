import {
    Text,
    Card,
    CardBody,
    Avatar,
    Wrap,
    WrapItem,
    Button,
    CardHeader,
    Flex,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
} from '@chakra-ui/react';

import React from 'react';
import ModalUser from './ModalUser';
import { useState } from 'react';

export default function UserComponent({ user = {} }) {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

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
                        <Avatar name={user?.name}/>

                        <Box>
                            <Heading size='sm'>{user?.name}</Heading>
                            <Text>@{user?.username}</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                
                

                <Button
                    width='100%'
                    colorScheme='blue'
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Ver Info
                </Button>
            </CardBody>
            <ModalUser
                isOpen={open}
                onClose={handleClose}
                user={user}
            />
        </Card>
    );
}
