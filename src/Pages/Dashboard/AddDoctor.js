import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Navbar/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { isLoading, data: services } = useQuery('services', () => fetch('http://localhost:5000/service').then(res =>
        res.json()
    )
    )

    if (isLoading) {
        return <Loading />
    }

    const onSubmit = async data => {
        console.log('data', data);
    }
    return (
        <div>
            <h1 className='text-3xl text-center'>Add Doctor</h1>
            <div className=''>
                <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs ml-1">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="name"
                            placeholder="Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}
                            </span>}
                        </label>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a Valid Email',
                                }
                            })}

                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}
                            </span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select {...register('Specialty')} class="select w-full max-w-xs ">
                            {
                                services.map(service => <option
                                    key={service._id}
                                    value={service.name}
                                >{service.name}</option>)
                            }
                        </select>
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="file"
                            // placeholder="Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}
                            </span>}
                        </label>
                    </div>
                    <input className='btn w-full max-w-xs mt-3' value='ADD' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;