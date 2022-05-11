import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 1,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 1,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]
    return (

        <div className='mt-28'>
            <div className=' text-center'>
                <h2 className='text-xl text-primary uppercase font-bold'>our services</h2>
                <h2 className='text-4xl uppercase mt-2'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-16'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            

            <div class="hero min-h-screen bg-base-100 mt-32">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='w-1/2' src={treatment} />
                    <div className='w-1/2'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;