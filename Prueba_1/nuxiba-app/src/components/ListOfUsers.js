import { useSelector } from 'react-redux';
import UserComponent from './UserComponent';
import { Stack, SimpleGrid, Heading } from '@chakra-ui/react';

function ListOfUsers() {
    const users = useSelector((state) => state.users);
    return (
        <div>
            <Stack spacing={3}>
                <Heading
                    color='white'
                    marginBottom='10px'
                >
                    Users
                </Heading>
            </Stack>
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 4 }}
                spacing='40px'
            >
                {users?.map((user, index) => {
                    return (
                        <UserComponent
                            user={user}
                            key={index}
                        />
                    );
                })}
            </SimpleGrid>
        </div>
    );
}

export default ListOfUsers;
