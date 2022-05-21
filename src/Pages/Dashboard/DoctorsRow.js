import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch }) => {
    const { name, specialty, img,email} = doctor
    console.log(doctor.specialty);

    const handleDelete=()=>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                toast.success(`Doctor :${name} is deleted.`);
                refetch();
            }
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={()=>handleDelete(email)} class="btn btn-outline btn-sm btn-error rounded border-0">Delete</button></td>
        </tr>
    );
};

export default DoctorsRow;