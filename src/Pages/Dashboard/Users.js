import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Navbar/Loading';
import UsersRow from './UsersRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1>all user {users.length}</h1>
            {/* <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
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
                                refetch={refetch}
                            ></UsersRow>)
                        }
                    </tbody>
                </table>
            </div> */}

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className=''>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => <UsersRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            ></UsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;