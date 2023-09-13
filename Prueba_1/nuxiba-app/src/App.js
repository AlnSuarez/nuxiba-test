import { Card, CardBody } from '@chakra-ui/react';
import './App.css';
import ListOfUsers from './components/ListOfUsers';
import { getAllUsers, setUsers } from './actions/users';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch()
    const [usersProps , setUsersProps] = useState(null)
    useEffect(() => {
        getAllUsers().then(({data}) => {
            dispatch(setUsers(data))
            setUsersProps(data)
        });
    }, []);

    return (
        <div className='App'>
            
                    <ListOfUsers users={usersProps}/>
            
        </div>
    );
}

export default App;
