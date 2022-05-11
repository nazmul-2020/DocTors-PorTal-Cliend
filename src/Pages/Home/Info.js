import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-4'>
            <InfoCard bgColor='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours' cardText='Lorem Ipsum is simply dummy text of the pri' img={clock} ></InfoCard>
            <InfoCard bgColor='bg-accent' cardTitle='Visit our location' cardText='Brooklyn, NY 10036, United States' img={marker} ></InfoCard>
            <InfoCard bgColor='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact us now' cardText='+000 123 456789' img={phone} ></InfoCard>
        </div>
    );
};

export default Info;