import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Navbar/Loading';
import UsersRow from './UsersRow';

const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1>all user {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UsersRow
                                key={user._id}
                                user={user}
                            ></UsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;