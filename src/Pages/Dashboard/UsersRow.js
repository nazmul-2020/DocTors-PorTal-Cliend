import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status===403){
                    toast.error('Failed to Make an admin');
                }
                res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0){
                    refetch();
                toast('Successfully made an admin');
                }
            })
    }
    return (
        <div>
            <tr>
                <th>1</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
                <td><button class="btn btn-xs">Remove User</button></td>
                <td>Blue</td>
            </tr>
        </div>
    );
};

export default UsersRow;